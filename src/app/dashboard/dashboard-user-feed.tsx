"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { HandMetal, PlusIcon, MessageCircleIcon, RepeatIcon, HeartIcon, SettingsIcon, StarIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import confetti from "canvas-confetti";
import LeftSidebar from "./leftsidebar/LeftSidebar"; // Adjust the import path for the LeftSidebar component
import RightSidebar from "./rightsidebar/RightSidebar"; // Import the RightSidebar component

export function DashboardUserFeed() {
  const [counter, setCounter] = useState(0);
  const [showModal, setShowModal] = useState(false);
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
    setCounter((prevCounter) => prevCounter + 1);
    runConfetti();
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen w-full dark:bg-[#222]">
      <LeftSidebar /> 
      <div className="flex-1 p-6 space-y-5 dark:bg-[#222]">
        <div className="grid gap-6 dark:bg-[#222]">

          <div className="grid gap-4">
            <Card className="dark:bg-[#222]">
              <CardHeader className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">John Doe</div>
                    <div className="text-sm text-muted-foreground">
                      @johndoe
                    </div>
                  </div>
                </div>
                <div className="grid gap-2 text-left sm:ml-auto">
                  <div className="text-sm text-muted-foreground">Oct 8, 2023</div>
                  <div className="text-sm text-muted-foreground">Project Update</div>
                  <div className="text-sm text-muted-foreground">Acme Inc</div>
                  <div className="flex items-center gap-2">
                    <Link
                      href="#"
                      className="text-sm text-primary underline"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                    <Button variant="ghost" size="sm" className="text-sm">
                      Download HTML
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Excited to share my latest project with you all! Check it out
                  and let me know what you think. #coding #webdev
                </p>
                <img
                  src="/placeholder.svg"
                  width={800}
                  height={450}
                  alt="Project Screenshot"
                  className="mt-4 w-full rounded-md"
                />
              </CardContent>
              <CardFooter className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <RepeatIcon className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <HeartIcon className="h-5 w-5" />
                </Button>
                <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  ref={buttonRef}
                  onClick={handleButtonClick}
                  title="Rock Yeah!"
                  className="transition-transform-all duration-200 ease-in-out hover:bg-primary hover:scale-110" // Add hover classes
                  onMouseDown={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
                    <HandMetal className="h-5 w-5 hover:text-white" />
                  </Button>
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
                <span>{counter}</span>
              </CardFooter>
            </Card>
            {/* ... other cards ... */}
          </div>
        </div>
      </div>
      <RightSidebar /> {/* Use the RightSidebar component */}
    </div>
  );
}
