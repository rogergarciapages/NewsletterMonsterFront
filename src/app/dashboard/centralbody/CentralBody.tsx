"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { MessageCircleIcon, RepeatIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import LikeButton from "./LikeButton"; 
import YouRockButton from "./YouRockButton"; 

export function CentralBody() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return <div>Please log in to see the dashboard.</div>;
  }

  return (
    <div className="flex-1 p-6 space-y-5 dark:bg-[#222]">
      <div className="grid gap-6 dark:bg-[#222]">
        <div className="grid gap-4">
          <Card className="dark:bg-[#222] dark:border-[#494949]">
            <CardHeader className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={session?.user?.image ?? "/placeholder-user.jpg"} />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{session?.user?.name ?? "John Doe"}</div>
                  <div className="text-sm text-muted-foreground">
                    <p>@{session?.user?.email?.split('@')[0] ?? "johndoe"}</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Excited to share my latest project with you all! Check it out and let me know what you think. #coding #webdev
              </p>
              <img src="/placeholder.svg" width={800} height={450} alt="Project Screenshot" className="mt-4 w-full rounded-md" />
            </CardContent>
            <CardFooter className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <MessageCircleIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <RepeatIcon className="h-5 w-5" />
              </Button>
              {session && session.user && <LikeButton userId={session.user.id} newsletterId={1} />}
              <YouRockButton />
            </CardFooter>
          </Card>
          {/* ... other cards ... */}
        </div>
      </div>
    </div>
  );
}
