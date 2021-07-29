import * as React from 'react';

import Link from 'next/link';

const CustomLink = ({
  href,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
};

export default CustomLink;
