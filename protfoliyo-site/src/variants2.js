import { useState, useEffect } from "react";
import "./App.css";

// Cursor position and variant logic
export const useCursorVariants = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const variants = {
    default: {
      left: cursorX + "px",
      top: cursorY + "px",
    },
  };

  return { variants };
};
