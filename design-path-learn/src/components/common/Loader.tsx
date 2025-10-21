import { useEffect, useRef } from "react";

function Loader() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tlRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let mounted = true;

    import('gsap')
      .then((mod) => {
        if (!mounted || !containerRef.current) return;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const gsap = (mod as any).gsap || (mod as any).default || mod;
        const q = gsap.utils.selector(containerRef.current);
        const tl = gsap.timeline({ repeat: -1 });

        tl.to(q('.children_1'), { y: -10, duration: 0.5, ease: 'power1.inOut', yoyo: true });
        tl.to(q('.children_2'), { y: -10, duration: 0.5, ease: 'power1.inOut', yoyo: true }, '-=0.25');
        tl.to(q('.children_3'), { y: -10, duration: 0.5, ease: 'power1.inOut', yoyo: true }, '-=0.25');
        tl.to(q('.children_4'), { y: -10, duration: 0.5, ease: 'power1.inOut', yoyo: true }, '-=0.25');

        tlRef.current = tl;
      })
      .catch((err) => {
        console.error('Failed to load gsap for Loader animation:', err);
      });

    return () => {
      mounted = false;
      if (tlRef.current) {
        tlRef.current.kill();
        tlRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative z-10 flex items-center justify-center w-full h-full min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          <span className="bg-yellow-500 w-4 h-4 children_1"></span>
          <span className="bg-blue-500 w-4 h-4 children_2"></span>
        </div>
        <div className="flex gap-2">
          <span className="bg-green-500 w-4 h-4 children_3"></span>
          <span className="bg-red-500 w-4 h-4 children_4"></span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
