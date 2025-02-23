import React from 'react';

const SingleContactSocial = ({Icon, link}) => {
  return (
    <div className='text-2xl h-12 w-12 border text-orange border-orange rounded-full flex items-center justify-center'>
      <a href={link} className='cursor-pointer'><Icon/></a>
    </div>
  );
}

export default SingleContactSocial;
