"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { HandMetal } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  BookmarkIcon,
  ExpandIcon,
  HeartIcon,
  HomeIcon,
  ListIcon,
  MailsIcon,
  MessageCircleIcon,
  MessagesSquareIcon,
  PlusIcon,
  RepeatIcon,
  SettingsIcon,
  StarIcon,
  XIcon,
  TrendingUpIcon,
} from "../dashboard/icons";
import Confetti from "react-confetti";
import { UsersIcon } from "lucide-react";

export function DashboardUserFeed() {
  const [counter, setCounter] = useState(0);
  const [confetti, setConfetti] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const confettiRef = useRef<HTMLDivElement>(null);
  const [confettiDimensions, setConfettiDimensions] = useState({
    width: 80,
    height: 80,
  });

  useEffect(() => {
    if (confettiRef.current) {
      const { width, height } = confettiRef.current.getBoundingClientRect();
      setConfettiDimensions({ width, height });
    }
  }, [confettiRef]);

  const handleButtonClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setConfetti(true);
    setShowModal(true);
    setTimeout(() => {
      setConfetti(false);
    }, 2000); // Confetti effect duration
    setTimeout(() => {
      setShowModal(false);
    }, 3000); // Modal display duration
  };

  return (
    <div className="flex min-h-screen w-full dark:bg-[#222]">
      <div className="hidden w-1/5 dark:bg-[#222] p-6 lg:block">
        <div className="flex flex-col gap-6">
          <nav className="grid gap-2">
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff]"
              prefetch={false}
            >
              <HomeIcon className="h-5 w-5" />
              Home
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff]"
              prefetch={false}
            >
              <TrendingUpIcon className="h-5 w-5" />
              Trending
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff]"
              prefetch={false}
            >
              <MailsIcon className="h-5 w-5" />
              Notifications
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff]"
              prefetch={false}
            >
              <MessagesSquareIcon className="h-5 w-5" />
              Messages
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff]"
              prefetch={false}
            >
              <BookmarkIcon className="h-5 w-5" />
              Bookmarks
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff]"
              prefetch={false}
            >
              <ListIcon className="h-5 w-5" />
              Lists
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff]"
              prefetch={false}
            >
              <UsersIcon className="h-5 w-5" />
              Profile
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff]"
              prefetch={false}
            >
              <ExpandIcon className="h-5 w-5" />
              More
            </Link>
          </nav>
        </div>
      </div>
      <div className="flex-1 dark:bg-[#222] p-6">
        <div className="grid gap-6 dark:bg-[#222]">
          <div className="flex items-center justify-between dark:bg-[#222]">
            <h2 className="text-2xl font-bold">Home</h2>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <StarIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <SettingsIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
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
                    onClick={handleButtonClick}
                    title="Rock Yeah!"
                    style={{ transition: "transform 0.2s ease-in-out" }}
                    onMouseDown={(e) =>
                      (e.currentTarget.style.transform = "scale(1.1)")
                    }
                    onMouseUp={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    <HandMetal className="h-5 w-5" />
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
                  {confetti && (
                    <div
                      className="absolute"
                      style={{
                        width: "80px",
                        height: "80px",
                        top: "-30px",
                        left: "-30px",
                        pointerEvents: "none", 
                      }}
                      ref={confettiRef}
                    >
                      <Confetti
                        width={confettiDimensions.width}
                        height={confettiDimensions.height}
                        recycle={false}
                        numberOfPieces={50}
                        gravity={0.4}
                        initialVelocityY={7}
                        confettiSource={{
                          x: confettiDimensions.width / 2,
                          y: confettiDimensions.height / 2,
                          w: 10,
                          h: 10,
                        }}
                        colors={["#ff0f7b", "#f89b29", "#00f9ff"]}
                        drawShape={(ctx) => {
                          ctx.beginPath();
                          ctx.arc(0, 0, 2, 0, 2 * Math.PI);
                          ctx.fill();
                        }}
                      />
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
      <div className="hidden w-1/5 dark:bg-[#222] p-6 lg:block">
        <div className="grid gap-6">
          <div>
            <h3 className="text-lg font-bold">Who to follow</h3>
            <div className="mt-4 grid gap-4">
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">
                    @sarahjohnson
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-auto hover:bg-primary"
                >
                  <PlusIcon className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Michael Brown</div>
                  <div className="text-sm text-muted-foreground">
                    @michaelbrown
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-auto hover:bg-primary"
                >
                  <PlusIcon className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Emily Davis</div>
                  <div className="text-sm text-muted-foreground">
                    @emilydavis
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-auto hover:bg-primary"
                >
                  <PlusIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">Trends for you</h3>
            <div className="mt-4 grid gap-4">
              <div className="flex items-center gap-2">
                <Link
                  href="#"
                  className="rounded-md bg-primary px-2 py-1 text-sm text-accent-foreground"
                  prefetch={false}
                >
                  #coding
                </Link>
                <div className="text-sm text-muted-foreground">
                  Trending in Technology
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="#"
                  className="rounded-md bg-primary px-2 py-1 text-sm text-accent-foreground"
                  prefetch={false}
                >
                  #foodie
                </Link>
                <div className="text-sm text-muted-foreground">
                  Trending in Lifestyle
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="#"
                  className="rounded-md bg-primary px-2 py-1 text-sm text-accent-foreground"
                  prefetch={false}
                >
                  #travel
                </Link>
                <div className="text-sm text-muted-foreground">
                  Trending in Travel
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">Tags</h3>
            <div className="mt-4 grid gap-4">
              <div className="flex items-center gap-2">
                <Link
                  href="#"
                  className="rounded-md bg-primary px-2 py-1 text-sm text-accent-foreground"
                  prefetch={false}
                >
                  #coding
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="#"
                  className="rounded-md bg-primary px-2 py-1 text-sm text-accent-foreground"
                  prefetch={false}
                >
                  #webdev
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="#"
                  className="rounded-md bg-primary px-2 py-1 text-sm text-accent-foreground"
                  prefetch={false}
                >
                  #react
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
