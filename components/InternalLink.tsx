import Link from 'next/link';

type InternalLinkProps = {
  to: string;
  children: string;
};

const InternalLink = ({ to, children }: InternalLinkProps): JSX.Element => {
  return (
    <Link href={to}>
      <a>{children}</a>
    </Link>
  );
};

export default InternalLink;
