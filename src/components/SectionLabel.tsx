/** Studio-style eyebrow: "(01) — About" */
const SectionLabel = ({ index, children }: { index: string; children: string }) => (
  <p data-reveal className="flex items-center gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] text-gray-400 dark:text-gray-500 mb-3 sm:mb-4">
    <span className="text-gray-900 dark:text-white">({index})</span>
    <span className="w-8 h-px bg-gray-300 dark:bg-gray-700" />
    <span data-scramble>{children}</span>
  </p>
);

export default SectionLabel;
