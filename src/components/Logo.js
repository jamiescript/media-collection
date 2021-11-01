import * as React from 'react';
import { GiBookshelf } from 'react-icons/gi';

const Logo = ({ size }) => {
  return (
    <div>
      <GiBookshelf size={size} />
    </div>
  );
};

export { Logo };
