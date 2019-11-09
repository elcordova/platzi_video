import React from 'react';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitalState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';
const Home = () => {
  const initialState = useInitalState(API);
  console.log(initialState);
  return (
    <>
      <Search />
      {
        initialState.mylist.length > 0 && (
          <Categories title='Mi Lista'>
            <Carousel>
              {initialState.mylist.map((item) => <CarouselItem key={item.id} {...item} />)}
            </Carousel>
          </Categories>
        )
      }
      <Categories title='Tendencias'>
        <Carousel>
          {initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      {
        initialState.originals.length > 0 && (
          <Categories title='Originales Platzi'>
            <Carousel>
              {initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
            </Carousel>
          </Categories>
        )
      }
    </>
  );
};

export default Home;
