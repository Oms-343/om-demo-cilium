import React from 'react';

import Heading from 'components/shared/heading/heading';

const Security = () => {
  return (
    <>
      <Heading className="text-2xl font-bold  lg:text-3xl " size="3xs" tag="h2">
        This is security page route
      </Heading>

      <ul className="ml-8 list-disc">
        <li>
          we can implement the design of this page like something similar to cilium docs and
          elaborate about security
        </li>
        <li> then as mentioned we will then add relevent links to blogs and other stuff </li>
        <li>
          As due to unavailabilty of design guidelines plus the application time was limited, i was
          unable to implement the full structure of this page and thus just created this dummy
          route, but surely it will be done 100% in the mentorship period 😊
        </li>
      </ul>
    </>
  );
};

export default Security;
