"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { HandMetal } from "lucide-react";
import confetti from "canvas-confetti";

const YouRockButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const runConfetti = () => {
    if (!buttonRef.current) return;

    const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;

    confetti({
      particleCount: 50,
      startVelocity: 30,
      spread: 45,
      origin: { x: x / window.innerWidth, y: y / window.innerHeight },
      scalar: 0.5,
    });
  };

  const handleButtonClick = () => {
    setClickCount(prevCount => prevCount + 1);
    runConfetti();
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 1500);
  };

  return (
    <div className="relative flex items-center">
      <Button
        variant="ghost"
        size="icon"
        ref={buttonRef}
        onClick={handleButtonClick}
        title="Rock Yeah!"
        className="transition-transform duration-200 ease-in-out hover:bg-primary hover:scale-110"
        onMouseDown={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <HandMetal className="h-5 w-5" />
      </Button>
      <p className="ml-2 text-m bg-yellow-500 dark:text-black py-1 px-2 rounded-xl">{clickCount}</p> {/* Display click count next to the button */}
      {showModal && (
        <div
          className="absolute flex items-center justify-center"
          style={{
            bottom: "100%",
            left: "50%",
            transform: "translateX(-50%) translateY(-10px)",
            padding: "5px 10px",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "5px",
            zIndex: 10,
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            whiteSpace: "nowrap",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "-6px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "0",
              height: "0",
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderTop: "8px solid #000",
            }}
          />
          <p className="text-[8px]">You rock it!</p>
        </div>
      )}
    </div>
  );
};

export default YouRockButton;
