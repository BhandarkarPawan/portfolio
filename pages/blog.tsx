import BlogContent from '../components/BlogContent';
import BlogNav from '../components/BlogNav';
import React from 'react';

const Blog = () => {
  return (
    <main className="md:flex bg-blue-100 w-full ">
      <BlogNav />
      <BlogContent />
    </main>
  );
};

export default Blog;
