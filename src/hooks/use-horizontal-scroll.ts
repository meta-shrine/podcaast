import { useRef, useEffect } from "react";

export function useHorizontalScroll() {
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = elRef.current;

    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0 && e.deltaX === 0) return;

        e.preventDefault();

        // Increase the scroll speed for better responsiveness
        const scrollSpeed = 5;
        
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          // Adjust vertical scroll speed
          el.scrollTop += e.deltaY * scrollSpeed;
        } else {
          // Adjust horizontal scroll speed
          el.scrollLeft += e.deltaX * scrollSpeed;
        }
      };

      el.addEventListener("wheel", onWheel);

      return () => {
        el.removeEventListener("wheel", onWheel);
      };
    }
  }, []);

  return elRef;
}
