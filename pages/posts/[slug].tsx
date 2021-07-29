import { format, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import React from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeKatex from 'rehype-katex';
import math from 'remark-math';

import Layout, { WEBSITE_HOST_URL } from '../../components/Layout';
import NoticeBox from '../../components/NoticeBox';
import MaxWidth from '../../components/MaxWidth';
import InternalLink from '../../components/InternalLink';

import { MetaProps } from '../../types/layout';
import { PostType } from '../../types/post';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  Head,
  Image,
  Link,
  NoticeBox,
  MaxWidth,
  InternalLink,
  a: (props) => <a target="_blank" rel="noreferrer" {...props} />,
};

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
};

const PostPage = ({ source, frontMatter }: PostPageProps): JSX.Element => {
  const customMeta: MetaProps = {
    title: `${frontMatter.title} - Hunter Chang`,
    description: frontMatter.description,
    image: `${WEBSITE_HOST_URL}${frontMatter.image}`,
    date: frontMatter.date,
    type: 'article',
  };

  return process.env.NODE_ENV !== 'development' && frontMatter.draft ? null : (
    <Layout customMeta={customMeta} addMath={!!frontMatter?.hasMath}>
      <div className="flex flex-col items-center px-2">
        <article className="w-full max-w-prose">
          <h1 className="mb-3 text-gray-900 dark:text-white">
            {frontMatter.title}
          </h1>
          <p className="mb-10 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
          </p>
          <div className="prose dark:prose-dark">
            <MDXRemote {...source} components={components} />
          </div>
        </article>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [require('remark-code-titles'), math],
      rehypePlugins: [
        mdxPrism,
        rehypeSlug,
        rehypeAutolinkHeadings,
        [
          rehypeKatex,
          {
            trust: true,
            macros: {
              '\\eqref': '\\href{###1}{(\\text{#1})}',
              '\\ref': '\\href{###1}{\\text{#1}}',
              '\\label': '\\htmlId{#1}{}',
            },
          },
        ],
      ],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
