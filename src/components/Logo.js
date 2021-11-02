/** @jsx jsx */
import { jsx } from '@emotion/react';
import { GiBookshelf } from 'react-icons/gi';

const Logo = ({ size }) => {
  return (
    <div css={{ display: 'flex', justifyContent: 'center' }}>
      <GiBookshelf size={size} />
    </div>
  );
};

export { Logo };
