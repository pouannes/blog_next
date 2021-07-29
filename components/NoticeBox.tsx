import { QuestionMarkCircleIcon } from '@heroicons/react/solid';

type NoticeBoxProps = {
  variant: 'focus' | 'definition';
  marginBottom?: boolean;
  children: JSX.Element | JSX.Element[];
};

const NoticeBox = ({
  variant,
  marginBottom = false,
  children,
}: NoticeBoxProps): JSX.Element => {
  let background, backgroundLight;
  if (variant === 'focus') {
    background = 'bg-green-500';
    backgroundLight = 'bg-green-100';
  } else {
    background = 'bg-blue-500';
    backgroundLight = 'bg-blue-100';
  }

  return (
    <div className={`${backgroundLight} ${marginBottom ? 'mb-6' : ''}`}>
      <div className={`text-gray-50 m-0 pl-3 py-1 ${background}`}>
        <span className="flex items-center m-0">
          <QuestionMarkCircleIcon className="w-6 h-6 mr-2" />{' '}
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </span>
      </div>
      <div className="px-4 pb-1 -mt-1">{children}</div>
    </div>
  );
};

export default NoticeBox;
