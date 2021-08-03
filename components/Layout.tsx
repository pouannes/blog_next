import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
  addMath?: boolean;
};

export const WEBSITE_HOST_URL = 'https://nextjs-typescript-mdx-blog.vercel.app';

const Layout = ({
  children,
  customMeta,
  addMath = false,
}: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      {addMath ? (
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css"
          integrity="sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn"
          crossOrigin="anonymous"
        />
      ) : null}

      <header>
        <div className="max-w-3xl px-8 mx-auto">
          <div className="flex items-center justify-between py-6">
            <Navigation />
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-3xl px-8 py-4 mx-auto text-left sm:text-justify">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
