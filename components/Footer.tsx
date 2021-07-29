import Link from 'next/link';

const Footer = (): JSX.Element => {
  return (
    <div className="flex flex-col sm:px-0 px-8 max-w-[44rem]  mx-auto border-t border-gray-200 dark:border-gray-600 py-8 mt-14 mb-20">
      <p className="text-gray-700 dark:text-gray-200">Pierre Ouannes</p>
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
            href="https://github.com/pouannes"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </StyledLink>
          <StyledLink
            href="https://twitter.com/PierreOuannes"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </StyledLink>

          <StyledLink
            href="https://www.linkedin.com/in/pierre-ouannes"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
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
      className={`py-2 my-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default Footer;
