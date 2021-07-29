import { format, parseISO } from 'date-fns';

import Layout, { WEBSITE_HOST_URL } from './Layout';
import { PostType } from '../types/post';
import { MetaProps } from '../types/layout';

type BlogPostLayout = {
  frontMatter: PostType;
  children: JSX.Element | JSX.Element[];
};

const BlogPostLayout = ({
  frontMatter,
  children,
}: BlogPostLayout): JSX.Element => {
  const customMeta: MetaProps = {
    title: `${frontMatter.title} - Pierre Ouannes`,
    description: frontMatter.description,
    image: `${WEBSITE_HOST_URL}${frontMatter.image}`,
    date: frontMatter.date,
    type: 'article',
  };

  return (
    <Layout customMeta={customMeta} addMath={!!frontMatter?.hasMath}>
      <div className="flex flex-col items-center px-2">
        <article className="w-full max-w-prose">
          <h1 className="mb-3 text-gray-900 dark:text-white">
            {frontMatter.title}
          </h1>
          <p className="mb-10 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
            {` • `}
            {frontMatter.readingTime.text}
          </p>
          <div className="prose dark:prose-dark">{children}</div>
        </article>
      </div>
    </Layout>
  );
};

export default BlogPostLayout;
