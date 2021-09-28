import React from 'react';
import { getAllPosts, Post } from '../../lib/api';
import Link from 'next/link';
import Title from '../../components/Title';
import { EColor } from '../../types/data-models';

export interface CardProps {
  post: Post;
}

const BlogCard: React.FC<CardProps> = (props) => {
  const post = props.post;
  const url = `/blog/${post.slug}`;
  return (
    <Link href={url}>
      <div className="bg-white shadow-lg  hoverCard  rounded-lg overflow-hidden">
        <div className="md:h-48 overflow-hidden">
          <img src={post.coverImage} />
        </div>
        <div className="md:p-8 p-4">
          <h1 className="font-secondary font-bold md:text-3xl text-2xl mb-4">
            {post.title}
          </h1>
          <p>{post.excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export interface Props {
  posts: Post[];
}

const Blog = ({ posts }: Props) => {
  console.log(posts);
  // return <div></div>
  return (
    <div className="bg-blue-100 flex items-center flex-col pt-8">
      <Title bgColor={EColor.YELLOW} textColor={EColor.BLACK}>
        My Blog
      </Title>
      <div className="md:grid grid-cols-3 md:p-16 mt-4 p-6 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts(['title', 'excerpt', 'coverImage', 'date', 'slug']);
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
