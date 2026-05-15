import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "BUTTON" || 
        e.target.tagName === "A" || 
        e.target.closest('.cursor-pointer') ||
        e.target.closest('button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    // Track mouse clicks for premium tactile feedback
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* 1. The Center Dot */}
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        animate={{
          left: mousePos.x,
          top: mousePos.y,
          // Color changes from Blue to Amber on hover
          backgroundColor: isHovered ? "#facc15" : "#3b82f6", 
          scale: isClicked ? 0.5 : isHovered ? 1.2 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      />

      {/* 2. The Interactive Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          // Expand on hover, shrink tight on click
          scale: isClicked ? 0.8 : isHovered ? 1.8 : 1,
          // Changes border style from solid to slightly opaque fill on hover
          backgroundColor: isHovered ? "rgba(250, 204, 21, 0.08)" : "transparent",
          borderColor: isHovered ? "rgba(250, 204, 21, 0.8)" : "rgba(59, 130, 246, 0.4)",
        }}
        transition={{ 
          type: "spring", 
          stiffness: isClicked ? 400 : 250, 
          damping: 22, 
          mass: 0.45 
        }}
        style={{ width: 36, height: 36 }}
      />
    </>
  );
};

export default CustomCursor;