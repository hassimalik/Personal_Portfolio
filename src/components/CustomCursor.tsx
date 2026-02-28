import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power2.out" });
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.4, ease: "power2.out" });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
      gsap.to(follower, { scale: 1, opacity: 1, duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 });
      gsap.to(follower, { scale: 0, opacity: 0, duration: 0.3 });
    };

    const onLinkHover = () => {
      gsap.to(follower, { scale: 2, opacity: 0.5, duration: 0.3 });
    };

    const onLinkLeave = () => {
      gsap.to(follower, { scale: 1, opacity: 1, duration: 0.3 });
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    const links = document.querySelectorAll("a, button");
    links.forEach((link) => {
      link.addEventListener("mouseenter", onLinkHover);
      link.addEventListener("mouseleave", onLinkLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onLinkHover);
        link.removeEventListener("mouseleave", onLinkLeave);
      });
    };
  }, []);

  return (
    <div className="hidden md:block">
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default CustomCursor;
