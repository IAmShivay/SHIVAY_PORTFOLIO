import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion, introReady } from '@/lib/motion';

/**
 * Hero backdrop: a living architecture diagram. Named services from the stack
 * sit in a faint mesh; request packets route between them, nodes pulse on
 * arrival, the cursor joins as a client, and a click fans out a burst.
 */

type Node = {
  bx: number; by: number; // base position, normalised 0..1
  x: number; y: number;   // current position, px
  z: number;              // depth, drives parallax and size
  phase: number;
  pulse: number;
  core: boolean;
  label?: string;
  metric?: string;
  ms?: [number, number];
};
type Packet = { from: number; to: number; t: number; speed: number; alive: boolean };

const CORE: { label: string; x: number; y: number; ms: [number, number] }[] = [
  { label: 'client', x: 0.55, y: 0.2, ms: [80, 140] },
  { label: 'cdn', x: 0.68, y: 0.12, ms: [4, 12] },
  { label: 'api-gateway', x: 0.7, y: 0.36, ms: [18, 46] },
  { label: 'auth', x: 0.88, y: 0.22, ms: [6, 14] },
  { label: 'ws-server', x: 0.58, y: 0.56, ms: [2, 8] },
  { label: 'bullmq', x: 0.83, y: 0.5, ms: [1, 4] },
  { label: 'workers', x: 0.92, y: 0.7, ms: [120, 340] },
  { label: 'redis', x: 0.72, y: 0.72, ms: [0.3, 1.2] },
  { label: 'postgres', x: 0.87, y: 0.88, ms: [3, 9] },
  { label: 'gcs', x: 0.58, y: 0.86, ms: [20, 60] },
];
const LINKS = [[0, 1], [0, 2], [1, 2], [2, 3], [2, 4], [2, 5], [5, 6], [4, 7], [5, 7], [6, 8], [2, 8], [6, 9], [4, 9], [3, 7], [2, 7]];

const PALETTE = {
  light: { line: '17,24,39', node: '#9ca3af', label: '#4b5563', accent: '#111111', bg: '#ffffff', glow: 'source-over' as const },
  dark: { line: '255,255,255', node: '#52525b', label: '#a1a1aa', accent: '#ffffff', bg: '#111111', glow: 'lighter' as const },
};

// Deterministic layout so the diagram is the same on every visit.
const rng = (seed: number) => () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;

const SystemGraph = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const section = canvas.closest('section')!;
    const ctx = canvas.getContext('2d')!;
    const reduced = prefersReducedMotion();
    const nav = navigator as Navigator & { deviceMemory?: number };
    const lowEnd = (nav.hardwareConcurrency ?? 8) <= 4 || (nav.deviceMemory ?? 8) <= 4;

    let W = 0, H = 0, portrait = false;
    const dpr = Math.min(window.devicePixelRatio || 1, lowEnd ? 1 : 1.5);

    // ---- graph ----
    const rand = rng(7);
    const nodes: Node[] = CORE.map((c) => ({
      bx: c.x, by: c.y, x: 0, y: 0, z: 0.6 + rand() * 0.6, phase: rand() * 6.28, pulse: 0,
      core: true, label: c.label, ms: c.ms, metric: '',
    }));
    const meshCount = window.innerWidth < 768 ? 34 : 64;
    for (let i = 0; i < meshCount; i++) {
      nodes.push({ bx: rand(), by: 0.05 + rand() * 0.9, x: 0, y: 0, z: 0.2 + rand() * 0.6, phase: rand() * 6.28, pulse: 0, core: false });
    }
    const CURSOR = nodes.length;
    nodes.push({ bx: 0, by: 0, x: -999, y: -999, z: 1, phase: 0, pulse: 0, core: false });

    const edgeKey = new Set<string>();
    const adj: number[][] = nodes.map(() => []);
    const coreEdges: [number, number][] = [];
    const meshEdges: [number, number][] = [];
    const link = (a: number, b: number, core: boolean) => {
      const k = a < b ? `${a}-${b}` : `${b}-${a}`;
      if (a === b || edgeKey.has(k)) return;
      edgeKey.add(k);
      adj[a].push(b); adj[b].push(a);
      (core ? coreEdges : meshEdges).push([a, b]);
    };
    LINKS.forEach(([a, b]) => link(a, b, true));
    // Each mesh node joins its two nearest neighbours (by base layout).
    for (let i = CORE.length; i < CURSOR; i++) {
      const near = nodes.slice(0, CURSOR).map((n, j) => ({ j, d: (n.bx - nodes[i].bx) ** 2 + (n.by - nodes[i].by) ** 2 }))
        .filter((o) => o.j !== i).sort((p, q) => p.d - q.d).slice(0, 2);
      near.forEach((o) => link(i, o.j, false));
    }

    // ---- packets ----
    const maxPackets = window.innerWidth < 768 || lowEnd ? 28 : 64;
    const packets: Packet[] = [];
    const spawn = (from?: number, to?: number) => {
      if (packets.length >= maxPackets + 24) return;
      let a = from, b = to;
      if (a === undefined) {
        // Bias traffic onto the named services.
        const [p, q] = rand() < 0.65 ? coreEdges[(rand() * coreEdges.length) | 0] : meshEdges[(rand() * meshEdges.length) | 0];
        [a, b] = rand() < 0.5 ? [p, q] : [q, p];
      }
      packets.push({ from: a, to: b ?? adj[a][0], t: 0, speed: 110 + rand() * 120, alive: true });
    };
    for (let i = 0; i < maxPackets; i++) { spawn(); packets[i].t = rand(); }

    // ---- live metrics ----
    const refreshMetrics = () => nodes.forEach((n) => {
      if (!n.ms) return;
      const [lo, hi] = n.ms;
      const ms = lo + Math.random() * (hi - lo);
      const rps = Math.round(200 + Math.random() * 2400);
      n.metric = `${ms < 2 ? ms.toFixed(1) : Math.round(ms)}ms · ${rps >= 1000 ? (rps / 1000).toFixed(1) + 'k' : rps}/s`;
    });
    refreshMetrics();
    const metricTimer = setInterval(refreshMetrics, 1400);

    // ---- theme ----
    let pal: (typeof PALETTE)[keyof typeof PALETTE] = PALETTE.light;
    const applyTheme = () => { pal = PALETTE[document.documentElement.classList.contains('dark') ? 'dark' : 'light']; };
    applyTheme();
    const themeObserver = new MutationObserver(() => { applyTheme(); if (reduced) draw(0); });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // ---- layout ----
    const place = (n: Node) => {
      if (!portrait) return [n.bx * W, n.by * H];
      // Phones: fold the diagram into the lower part of the screen, behind the CTAs.
      const x = n.core ? 0.06 + ((n.bx - 0.5) / 0.46) * 0.86 : n.bx;
      const y = n.core ? 0.56 + n.by * 0.4 : n.by;
      return [x * W, y * H];
    };
    const resize = () => {
      W = canvas.clientWidth; H = canvas.clientHeight;
      portrait = W < 768 && H > W;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduced) draw(0);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // ---- input ----
    const mouse = { x: -999, y: -999, nx: 0, ny: 0, active: false };
    let hover = -1;
    let ripple = { x: 0, y: 0, t: 9 };
    let cursorLinks: number[] = [];
    const nearest = (x: number, y: number, k: number) => nodes.slice(0, CURSOR)
      .map((n, j) => ({ j, d: (n.x - x) ** 2 + (n.y - y) ** 2 })).sort((p, q) => p.d - q.d).slice(0, k).map((o) => o.j);
    const local = (e: PointerEvent) => { const r = canvas.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const [x, y] = local(e);
      Object.assign(mouse, { x, y, nx: x / W - 0.5, ny: y / H - 0.5, active: true });
    };
    const onLeave = () => { mouse.active = false; hover = -1; };
    const onDown = (e: PointerEvent) => {
      if ((e.target as HTMLElement).closest('a, button')) return;
      const [x, y] = local(e);
      ripple = { x, y, t: 0 };
      nodes[CURSOR].x = x; nodes[CURSOR].y = y;
      const targets = nearest(x, y, 7);
      adj[CURSOR] = targets;
      // Fan-out: a burst of requests from the click point.
      targets.forEach((j) => { spawn(CURSOR, j); spawn(CURSOR, j); });
      if (!mouse.active) setTimeout(() => { adj[CURSOR] = []; }, 1200);
    };
    section.addEventListener('pointermove', onMove);
    section.addEventListener('pointerleave', onLeave);
    section.addEventListener('pointerdown', onDown);

    // ---- visibility / scroll / intro ----
    let visible = true;
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; });
    io.observe(canvas);
    let scrollP = 0;
    const st = ScrollTrigger.create({ trigger: section, start: 'top top', end: 'bottom top', onUpdate: (s) => { scrollP = s.progress; } });
    const intro = { v: reduced ? 1 : 0 };
    let introTween: gsap.core.Tween | undefined;
    if (!reduced) introReady.then(() => { introTween = gsap.to(intro, { v: 1, duration: 2.2, ease: 'power3.out', delay: 0.2 }); });

    // ---- frame ----
    let time = 0, sinceCursorSpawn = 0;
    function draw(dt: number) {
      time += dt;
      ctx.clearRect(0, 0, W, H);
      const fade = intro.v * (1 - scrollP * 0.9) * (portrait ? 0.6 : 1);
      if (fade <= 0.01) return;
      const px = mouse.active ? mouse.nx : 0, py = mouse.active ? mouse.ny : 0;

      // Positions: slow drift + depth parallax toward the cursor, lift on scroll-out.
      for (let i = 0; i < CURSOR; i++) {
        const n = nodes[i];
        const [bx, by] = place(n);
        n.x = bx + Math.sin(time * 0.35 + n.phase) * 6 * n.z - px * 26 * n.z;
        n.y = by + Math.cos(time * 0.3 + n.phase) * 5 * n.z - py * 18 * n.z - scrollP * 120 * n.z + (1 - intro.v) * 30 * n.z;
        n.pulse = Math.max(0, n.pulse - dt * 1.6);
      }
      const cur = nodes[CURSOR];
      if (mouse.active) {
        cur.x = mouse.x; cur.y = mouse.y;
        cursorLinks = nearest(mouse.x, mouse.y, 3);
        adj[CURSOR] = cursorLinks;
        const h = cursorLinks.find((j) => nodes[j].core && (nodes[j].x - mouse.x) ** 2 + (nodes[j].y - mouse.y) ** 2 < 34 ** 2);
        hover = h ?? -1;
        sinceCursorSpawn += dt;
        if (sinceCursorSpawn > 0.35 && cursorLinks.length) { sinceCursorSpawn = 0; spawn(CURSOR, cursorLinks[(Math.random() * cursorLinks.length) | 0]); }
      } else cursorLinks = [];

      // Edges — one path per weight class.
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(${pal.line},${0.07 * fade})`;
      ctx.beginPath();
      for (const [a, b] of meshEdges) { ctx.moveTo(nodes[a].x, nodes[a].y); ctx.lineTo(nodes[b].x, nodes[b].y); }
      ctx.stroke();
      ctx.strokeStyle = `rgba(${pal.line},${0.2 * fade})`;
      ctx.beginPath();
      for (const [a, b] of coreEdges) { ctx.moveTo(nodes[a].x, nodes[a].y); ctx.lineTo(nodes[b].x, nodes[b].y); }
      ctx.stroke();
      if (hover >= 0) {
        ctx.strokeStyle = pal.accent; ctx.globalAlpha = 0.7 * fade; ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (const j of adj[hover]) { ctx.moveTo(nodes[hover].x, nodes[hover].y); ctx.lineTo(nodes[j].x, nodes[j].y); }
        ctx.stroke();
        ctx.globalAlpha = 1; ctx.lineWidth = 1;
      }
      if (cursorLinks.length) {
        ctx.setLineDash([3, 5]); ctx.lineDashOffset = -time * 30;
        ctx.strokeStyle = `rgba(${pal.line},${0.35 * fade})`;
        ctx.beginPath();
        for (const j of cursorLinks) { ctx.moveTo(cur.x, cur.y); ctx.lineTo(nodes[j].x, nodes[j].y); }
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Packets: route on arrival; each is a solid head with a faint tail.
      ctx.globalCompositeOperation = pal.glow;
      ctx.strokeStyle = pal.accent; ctx.fillStyle = pal.accent; ctx.lineWidth = 1.2; ctx.lineCap = 'round';
      const heads: number[] = [];
      ctx.globalAlpha = 0.35 * fade;
      ctx.beginPath();
      for (const p of packets) {
        const a = nodes[p.from], b = nodes[p.to];
        const len = Math.hypot(b.x - a.x, b.y - a.y) || 1;
        p.t += (p.speed * dt) / len;
        if (p.t >= 1) {
          b.pulse = b.core ? 1 : 0.6;
          const next = adj[p.to].filter((j) => j !== p.from && j !== CURSOR);
          if (!next.length || Math.random() < 0.12) { p.alive = false; continue; }
          p.from = p.to; p.to = next[(Math.random() * next.length) | 0]; p.t = 0;
          continue;
        }
        const x = a.x + (b.x - a.x) * p.t, y = a.y + (b.y - a.y) * p.t;
        const tail = Math.min(p.t, 22 / len);
        ctx.moveTo(x, y);
        ctx.lineTo(x - (b.x - a.x) * tail, y - (b.y - a.y) * tail);
        heads.push(x, y);
      }
      ctx.stroke();
      ctx.globalAlpha = fade;
      ctx.beginPath();
      for (let i = 0; i < heads.length; i += 2) { ctx.moveTo(heads[i] + 1.8, heads[i + 1]); ctx.arc(heads[i], heads[i + 1], 1.8, 0, 6.283); }
      ctx.fill();
      for (let i = packets.length - 1; i >= 0; i--) if (!packets[i].alive) packets.splice(i, 1);
      while (packets.length < maxPackets) spawn();

      // Nodes.
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = pal.node;
      ctx.beginPath();
      for (let i = CORE.length; i < CURSOR; i++) {
        const n = nodes[i];
        const r = 1.1 + n.z + n.pulse * 1.5;
        ctx.moveTo(n.x + r, n.y); ctx.arc(n.x, n.y, r, 0, 6.283);
      }
      ctx.globalAlpha = 0.8 * fade;
      ctx.fill();

      ctx.font = '500 11px "JetBrains Mono", ui-monospace, monospace';
      ctx.textBaseline = 'middle';
      for (let i = 0; i < CORE.length; i++) {
        const n = nodes[i];
        const hot = i === hover;
        // Arrival pulse ring
        if (n.pulse > 0) {
          ctx.strokeStyle = pal.accent; ctx.lineWidth = 1;
          ctx.globalAlpha = n.pulse * 0.6 * fade;
          ctx.beginPath(); ctx.arc(n.x, n.y, 6 + (1 - n.pulse) * 16, 0, 6.283); ctx.stroke();
        }
        ctx.globalAlpha = fade;
        ctx.fillStyle = hot ? pal.accent : pal.label;
        ctx.beginPath(); ctx.arc(n.x, n.y, hot ? 4.5 : 3.2, 0, 6.283); ctx.fill();
        ctx.strokeStyle = hot ? pal.accent : `rgba(${pal.line},0.35)`;
        ctx.beginPath(); ctx.arc(n.x, n.y, 7.5, 0, 6.283); ctx.stroke();
        if (portrait) continue; // phones: the diagram is texture behind the copy, no labels
        const flip = n.x > W - 130;
        const tx = flip ? n.x - 13 : n.x + 13;
        ctx.textAlign = flip ? 'right' : 'left';
        // Knock the edges out behind the text so labels stay legible.
        ctx.lineWidth = 4; ctx.strokeStyle = pal.bg; ctx.lineJoin = 'round';
        ctx.globalAlpha = fade;
        ctx.strokeText(n.label!, tx, n.y - 6);
        ctx.strokeText(n.metric!, tx, n.y + 8);
        ctx.globalAlpha = (hot ? 1 : 0.8) * fade;
        ctx.fillText(n.label!, tx, n.y - 6);
        ctx.fillStyle = pal.accent;
        ctx.globalAlpha = (hot ? 1 : 0.55) * fade;
        ctx.fillText(n.metric!, tx, n.y + 8);
        ctx.textAlign = 'left'; ctx.lineWidth = 1;
      }

      // Click ripple
      if (ripple.t < 1.2) {
        ripple.t += dt;
        ctx.strokeStyle = pal.accent; ctx.lineWidth = 1.2;
        ctx.globalAlpha = Math.max(0, 1 - ripple.t / 1.2) * 0.8;
        ctx.beginPath(); ctx.arc(ripple.x, ripple.y, 8 + ripple.t * 220, 0, 6.283); ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    // Phones and weaker machines draw at 30fps; desktops at display rate.
    const frameBudget = window.innerWidth < 768 || lowEnd ? 1 / 30 : 0;
    let acc = 0;
    const tick = (_t: number, deltaMs: number) => {
      if (!visible || document.hidden || reduced) return;
      acc += Math.min(deltaMs / 1000, 0.1);
      if (acc < frameBudget) return;
      draw(Math.min(acc, 0.05));
      acc = 0;
    };
    gsap.ticker.add(tick);
    resize();

    return () => {
      gsap.ticker.remove(tick);
      clearInterval(metricTimer);
      introTween?.kill();
      st.kill(); io.disconnect(); ro.disconnect(); themeObserver.disconnect();
      section.removeEventListener('pointermove', onMove);
      section.removeEventListener('pointerleave', onLeave);
      section.removeEventListener('pointerdown', onDown);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" />;
};

export default SystemGraph;
