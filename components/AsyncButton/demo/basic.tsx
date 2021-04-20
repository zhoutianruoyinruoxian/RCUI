import React from 'react';
import AsyncButton from '../index';

export default function Demo() {

  const handleClick = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });

  return (<AsyncButton onClick={handleClick} >点击</AsyncButton>
  );
}
