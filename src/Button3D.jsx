import React from "react";
import { Link } from "react-router-dom";
import TiltCard from "./TiltCard";

// Reusable 3D button with hover tilt and subtle glare
// Props:
// - children: content
// - to: optional router path; if provided renders a Link
// - onClick: for button mode
// - variant: 'primary' | 'secondary' | 'ghost'
// - className: extra classes
export default function Button3D({
  children,
  to,
  onClick,
  variant = "primary",
  className = "",
  containerClassName = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500";
  const variants = {
    primary: "bg-emerald-700 text-white hover:bg-emerald-600 px-6 py-3",
    secondary:
      "bg-green-400 text-gray-900 hover:bg-green-300 px-6 py-3 border border-green-300",
    ghost:
      "bg-transparent text-gray-900 border border-gray-300 hover:bg-gray-100 px-6 py-3",
  };

  const content = (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );

  return (
    <TiltCard
      className={`inline-block ${containerClassName}`}
      intensity={12}
      scale={1.04}
      glare
    >
      {to ? (
        <Link
          to={to}
          aria-label={typeof children === "string" ? children : undefined}
        >
          {content}
        </Link>
      ) : (
        <button
          type="button"
          onClick={onClick}
          aria-label={typeof children === "string" ? children : undefined}
        >
          {content}
        </button>
      )}
    </TiltCard>
  );
}
