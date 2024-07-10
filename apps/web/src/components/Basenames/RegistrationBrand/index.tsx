import { Transition } from '@headlessui/react';
import { useRegistration } from 'apps/web/src/components/Basenames/RegistrationContext';
import { Icon } from 'apps/web/src/components/Icon/Icon';
import classNames from 'classnames';
import { Fragment, useState } from 'react';
import { useInterval } from 'usehooks-ts';

const SEARCH_LABEL_COPY_STRINGS = [
  'Set up a community profile.',
  'Connect with Based people.',
  'Get exclusive onchain perks.',
];

const useRotatingText = (strings: string[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
  }, 3000);
  return strings[currentIndex];
};

export default function RegistrationBrand() {
  const rotatingText = useRotatingText(SEARCH_LABEL_COPY_STRINGS);
  const { searchInputFocused } = useRegistration();
  return (
    <>
      <div className="flex items-center items-center gap-1">
        <span
          className={classNames({
            'text-blue-600': !searchInputFocused,
            'text-white': searchInputFocused,
          })}
        >
          <Icon name="blueCircle" color="currentColor" width={15} height={15} />
        </span>
        <h1 className="text-md font-bold md:text-xl">Basenames</h1>
      </div>
      {SEARCH_LABEL_COPY_STRINGS.map((string) => (
        <Transition
          key={string}
          as={Fragment}
          show={rotatingText === string}
          className="transition-opacity"
          enter={classNames('transform delay-500')}
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave={classNames('transform')}
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <p className="text-md absolute right-0 md:text-xl ">{string}</p>
        </Transition>
      ))}
    </>
  );
}
