"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react"; // Include useSession hook for session management
import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";

interface LikeButtonProps {
  userId: string;
  newsletterId: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ userId, newsletterId }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (!userId) return;

    const fetchLikeState = async () => {
      try {
        const response = await fetch(`/api/like-state?userId=${userId}&newsletterId=${newsletterId}`);
        const data = await response.json();
        setLiked(data.liked);
      } catch (error) {
        console.error('Error fetching like state:', error);
      }
    };
    fetchLikeState();
  }, [userId, newsletterId]);

  const handleLikeClick = async () => {
    if (!userId) return;

    try {
      const response = await fetch('/api/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, newsletterId }),
      });

      if (!response.ok) {
        throw new Error('Failed to toggle like');
      }

      const data = await response.json();
      setLiked(data.liked);
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleLikeClick}>
      <HeartIcon className={`h-5 w-5 ${liked ? 'text-red-500' : ''}`} />
    </Button>
  );
};

export default LikeButton;
