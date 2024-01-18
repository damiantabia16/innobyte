import React from 'react';
import ArmedPCs from './for-content/ArmedPCs';
import Notebooks from './for-content/Notebooks';
import Chairs from './for-content/Chairs';

const Content = () => {
  return (
    <section id="product-content" className='px-[15px] py-[40px] font-main'>
        <ArmedPCs />
        <Notebooks />
        <Chairs />
    </section>
  )
}

export default Content