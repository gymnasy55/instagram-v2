import React, { useEffect, useState } from 'react';
import faker from "@faker-js/faker";

type Suggestion = {
  id: number;
  name: string;
  username: string;
  avatar: string;
  email: string;
  dob: Date;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

export const Suggestions = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between text-sm mb-5'>
        <h3 className='text-sm font-bold text-gray-500'>Suggestions for you</h3>
        <button className='text-gray-600 font-semibold'>See All</button>
      </div>

      {
        suggestions.map(({id, avatar, username, company}) => (
          <div key={id} className='flex items-center justify-between mt-3'>
            <img src={avatar} alt="" className='w-10 h-10 rounded-full border p-[2px]' />

            <div className='flex-1 ml-4'>
              <h2 className='font-semibold text-sm'>{username}</h2>
              <h3 className='text-xs text-gray-400'>Works at {company.name}</h3>
            </div>

            <button className='text-blue-400 text-sm font-bold'>Follow</button>
          </div>
        ))
      }
    </div>
  );
};