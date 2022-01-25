import React from 'react';
import { Stories } from "./Feed/Stories";

export const Feed: React.FC = () => {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl max-auto'>
      <section className='col-span-2'>
        {/* Stories */}
        <Stories />

        {/* Posts */}
      </section>

      <section>
        {/* Mini profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
};