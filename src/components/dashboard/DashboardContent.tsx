// src/components/dashboard/DashboardContent.tsx

import React from 'react';

const posts = [
  {
    id: 1,
    user: 'John Doe',
    content: 'This is a post from John Doe.',
    likes: 5,
    comments: 2,
  },
  {
    id: 2,
    user: 'Jane Smith',
    content: 'This is a post from Jane Smith.',
    likes: 8,
    comments: 3,
  },
  // Add more posts as needed
];

const DashboardContent = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Your Feed</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-gray-300 w-10 h-10 rounded-full mr-4"></div>
              <div>
                <p className="font-bold">{post.user}</p>
              </div>
            </div>
            <p className="mb-4">{post.content}</p>
            <div className="flex items-center justify-between">
              <button className="flex items-center space-x-2 text-blue-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 9l-4 4m0 0l-4-4m4 4V3"></path>
                </svg>
                <span>{post.likes} Likes</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 14h.01M16 18h.01M21 21v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4m18-10V5a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2z"></path>
                </svg>
                <span>{post.comments} Comments</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardContent;
