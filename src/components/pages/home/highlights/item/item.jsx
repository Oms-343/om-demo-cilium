import React from 'react';
import { Popover } from '@headlessui/react';
import Heading from 'components/shared/heading';
import ChevronRightIcon from 'icons/chevronright.inline.svg';
import Tooltip from './Tooltip/Tooltip';

const Item = ({ icon: Icon, title, description }) => (
  <Popover as="li" className="relative last:mb-6">
    <>
      <Tooltip content={description} direction={'right'} delay={100}>
        <Popover.Button className=" flex h-full w-full items-center rounded-lg border border-gray-3 p-1 transition duration-200 hover:bg-sky-700 hover:text-white xl:p-1 xl:pl-6">
          <Icon className="h-auto w-16 shrink-0 xl:w-max" />
          <Heading className="mx-4 text-left" size="3xs" tag="h3">
            {title}
          </Heading>
          <ChevronRightIcon className="ml-auto h-4 w-auto shrink-0 pr-1 " />
        </Popover.Button>
      </Tooltip>
    </>
  </Popover>
);

export default Item;
//
