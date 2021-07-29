type MaxWidthProps = {
  children: JSX.Element | JSX.Element[];
};

const MaxWidth = ({ children }: MaxWidthProps): JSX.Element => {
  return <div className="max-w-full overflow-y-auto">{children}</div>;
};

export default MaxWidth;
