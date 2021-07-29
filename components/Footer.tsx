import Link from 'next/link';

const Footer = (): JSX.Element => {
  return (
    <div className="flex flex-col max-w-[44rem] mx-auto border-t border-gray-200 py-8 mt-8 mb-20">
      <p className="text-gray-700">Pierre Ouannes</p>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <Link href="/">
            <StyledLink>Home</StyledLink>
          </Link>
          <Link href="/about">
            <StyledLink>About</StyledLink>
          </Link>
        </div>
        <div className="flex flex-col">
          <StyledLink
            href="https://twitter.com/PierreOuannes"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </StyledLink>
          <StyledLink
            href="https://github.com/pouannes"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </StyledLink>
        </div>
      </div>
    </div>
  );
};

const StyledLink = ({
  className = '',
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element => {
  return (
    <a
      className={`py-2 my-2 text-gray-500 hover:text-gray-700 hover:cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default Footer;
