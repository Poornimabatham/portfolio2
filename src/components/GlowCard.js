import React, { useState, useRef } from "react";

const GlowCard = ({ children, className = "", style = {} }) => {
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={className}
      style={{
        position: "relative",
        borderRadius: "12px",
        border: "1px solid #334155",
        overflow: "hidden",
        boxShadow: isHovered ? "0 0 25px 4px #24c6dc44" : "none",
        transition: "box-shadow 0.3s ease",
        ...style,
      }}
    >
      {isHovered && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "12px",
            pointerEvents: "none",
            background: `radial-gradient(350px circle at ${glowPos.x}px ${glowPos.y}px, #24c6dcaa, transparent 70%)`,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "2px",
            zIndex: 10,
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default GlowCard;
