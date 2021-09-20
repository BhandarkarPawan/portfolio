import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostBySlug, getAllPosts, Post } from '../../lib/api';
import Head from 'next/head';
import markdownToHtml from '../../lib/markdownToHtml';
import PostBody from '../../components/PostBody';

export default function BlogPost(post: Post) {
  console.log(post);
  return <PostBody {...post} />;
}

export interface Props {
  params: {
    slug: string;
  };
}
export async function getStaticProps({ params }: Props) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'excerpt',
    'coverImage',
  ]);

  const content = await markdownToHtml(post.content);

  return {
    props: {
      ...post,
      content,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
