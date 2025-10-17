import React, { useRef } from "react";

// 3D tilt card with configurable intensity, scale, and subtle glare
export default function TiltCard({
  children,
  className = "",
  intensity = 16, // degrees
  scale = 1.02,
  glare = true,
}) {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rotateY = (px - 0.5) * intensity; // deg
    const rotateX = (0.5 - py) * intensity; // deg
    const shineX = px * 100;
    const shineY = py * 100;
    const shadowX = (0.5 - px) * 24; // px
    const shadowY = (0.5 - py) * 24; // px

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    el.style.boxShadow = `${shadowX}px ${shadowY}px 40px rgba(0,0,0,0.25)`;
    if (glare) {
      el.style.setProperty("--shine-x", `${shineX}%`);
      el.style.setProperty("--shine-y", `${shineY}%`);
    }
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    el.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      className={`relative transform-gpu transition-[transform,box-shadow] duration-200 will-change-transform ${className}`}
      style={
        glare
          ? {
              backgroundImage:
                "radial-gradient(500px circle at var(--shine-x,50%) var(--shine-y,50%), rgba(255,255,255,0.10), transparent 40%)",
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
