import React from 'react';
import Posters from '../components/Posters';
import Content from '../components/Content';
import SeeAllProducts from '../components/SeeAllProducts';

const Home = () => {
  return (
    <div id='wrapper'>
        <Posters />
        <Content />
        <SeeAllProducts />
    </div>
  )
}

export default Home