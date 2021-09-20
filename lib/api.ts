import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export interface Post {
  title: string;
  date: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {
    slug: fields.includes('slug') ? realSlug : '',
    title: fields.includes('title') ? data.title : '',
    excerpt: fields.includes('excerpt') ? data.excerpt : '',
    coverImage: fields.includes('coverImage') ? data.coverImage : '',
    content: fields.includes('content') ? content : '',
    date: fields.includes('date') ? data.date : new Date().toDateString(),
  };

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
