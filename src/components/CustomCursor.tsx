import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current || !followerRef.current) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    // Instant cursor movement using transform
    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Instant cursor movement - zero lag
      cursor.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
    };

    // Smooth follower animation
    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;

      follower.style.transform = `translate3d(${followerX - 15}px, ${followerY - 15}px, 0)`;

      requestAnimationFrame(animateFollower);
    };

    // Enhanced hover effects
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button') || target.closest('.group')) {
        // Enhanced main cursor hover
        cursor.style.transform += ' scale(1.8)';
        cursor.style.background = 'linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b)';
        cursor.style.boxShadow = '0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(236, 72, 153, 0.4)';
        cursor.style.filter = 'brightness(1.5)';

        // Enhanced follower hover
        follower.style.transform += ' scale(1.6)';
        follower.style.boxShadow = 'inset 0 0 0 2px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.4)';
        follower.style.background = 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2), rgba(245, 158, 11, 0.1))';
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button') || target.closest('.group')) {
        // Reset main cursor
        cursor.style.transform = cursor.style.transform.replace(' scale(1.8)', '');
        cursor.style.background = 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)';
        cursor.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.3)';
        cursor.style.filter = 'brightness(1.2)';

        // Reset follower
        follower.style.transform = follower.style.transform.replace(' scale(1.6)', '');
        follower.style.boxShadow = 'inset 0 0 0 2px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.2)';
        follower.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))';
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', moveCursor, { passive: true });
    document.addEventListener('mouseover', handleMouseEnter, { passive: true });
    document.addEventListener('mouseout', handleMouseLeave, { passive: true });

    // Start follower animation
    animateFollower();

    // Hide default cursor
    document.body.style.cursor = 'none';
    const style = document.createElement('style');
    style.textContent = '* { cursor: none !important; }';
    document.head.appendChild(style);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.body.style.cursor = '';
      style.remove();
    };
  }, []);

  return (
    <>
      {/* Main Cursor - Enhanced Design */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.3)',
          transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          willChange: 'transform',
          transform: 'translate3d(-100px, -100px, 0)',
          filter: 'brightness(1.2)',
        }}
      />

      {/* Follower Ring - Enhanced Design */}
      <div
        ref={followerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          border: '2px solid transparent',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
          backgroundClip: 'padding-box',
          boxShadow: 'inset 0 0 0 2px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.2)',
          transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          willChange: 'transform',
          transform: 'translate3d(-100px, -100px, 0)',
          backdropFilter: 'blur(2px)',
        }}
      />


    </>
  );
};



export default CustomCursor;
