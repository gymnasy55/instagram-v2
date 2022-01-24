import React from 'react';
import Image from 'next/image';

export const Header = () => {
  return (
    <div>
      <div className='flex justify-between'>
        {/*  Left */}
        <div className='relative'>
          <Image src='https://links.papareact.com/ocw' layout='fill' />
        </div>

        {/* Middle */}

        {/* Right */}
      </div>
    </div>
  );
};