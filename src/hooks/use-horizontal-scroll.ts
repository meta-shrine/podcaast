import { useRef, useEffect } from "react";

export function useHorizontalScroll<T extends HTMLDivElement>() {
  const elRef = useRef<T>(null);

  useEffect(() => {
    const el = elRef.current;

    const onMouseDown = (e: MouseEvent) => {
      let isDragging = true;
      let startX: number;
      let scrollLeft: number;

      startX = e.clientX;
      scrollLeft = el?.scrollLeft || 0;

      const onMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        const x = e.clientX;
        const walk = (x - startX) * 0.8;
        el && (el.scrollLeft = scrollLeft - walk);
      };

      const onMouseUp = () => {
        isDragging = false;
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    };

    el?.addEventListener("mousedown", onMouseDown);

    return () => {
      el?.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  return elRef;
}
