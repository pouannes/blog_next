import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <h1>Blog</h1>

      {posts.map((post) => (
        <Link key={post.slug} as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
          <article className="mt-12 cursor-pointer">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              {format(parseISO(post.date), 'MMMM dd, yyyy')}
            </p>
            <h1 className="mb-2 text-xl text-gray-900 dark:text-white ">
              {post.title}
            </h1>
            <p className="mb-3">{post.description}</p>
            <p></p>
          </article>
        </Link>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default Index;
