import React from 'react';

type StoryProps = {
  img: string;
  username: string;
}

export const Story: React.FC<StoryProps> = ({img, username}) => {
  return (
    <div>
      <img className='h-14 w-14 rounded-full border-red-500 p-[1.5px] border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src={img} alt='' />
      <p className='text-xs w-14 truncate text-center'>{username}</p>
    </div>
  );
};