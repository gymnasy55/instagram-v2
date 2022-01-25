import React from 'react';
import { Post } from "./Post/Post";

const posts = [
  {
    id: '123',
    username: 'kubarievilya',
    userImage: 'https://rb.gy/axtr96',
    image: 'https://rb.gy/axtr96',
    caption: 'POLCRAZ IS THE BEST',
  },
  {
    id: '123',
    username: 'kubarievilya',
    userImage: 'https://rb.gy/axtr96',
    image: 'https://rb.gy/axtr96',
    caption: 'POLCRAZ IS THE BEST',
  },
];

export const Posts: React.FC = () => {
  return (
    <div>
      {posts.map(({id, username, userImage, image, caption}) => (
        <Post key={id} id={id} username={username} userImage={userImage} image={image} caption={caption} />
      ))}
    </div>
  );
};