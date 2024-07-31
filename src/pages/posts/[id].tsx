"use client"

import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

// Define User and Post interfaces
interface User {
  profile_photo: string;
  name: string;
  username: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  user: User;
}

interface PostProps {
  post: Post;
}

// Mock data source - replace this with your actual data source logic
let mockPosts: Post[] = [
  {
    id: "1",
    title: "Sample Post",
    content: "This is a sample post.",
    createdAt: new Date().toISOString(),
    user: { 
      profile_photo: "https://example.com/photo.jpg", 
      name: "John Doe", 
      username: "johndoe" 
    },
  },
  // Add more mock posts as needed
];

const PostPage: React.FC<PostProps> = ({ post }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={`Newsletter sent by ${post.user.name}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={`Newsletter sent by ${post.user.name}`} />
        <meta property="og:image" content={post.user.profile_photo} />
      </Head>
      <h1>{post.title}</h1>
      <p>Posted on: {new Date(post.createdAt).toLocaleDateString()}</p>
      <p>{post.content}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  // Find the post in the mock data source
  const post = mockPosts.find(post => post.id === id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
};

export default PostPage;
