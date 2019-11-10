import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Search />
      {
        myList.length > 0 && (
          <Categories title='Mi Lista'>
            <Carousel>
              {myList.map((item, index) => (
                <CarouselItem
                  key={`mylist${index}`}
                  {...item}
                  isList
                />
              ))}
            </Carousel>
          </Categories>
        )
      }
      <Categories title='Tendencias'>
        <Carousel>
          {trends.map((item, index) => <CarouselItem key={`trends${index}`} {...item} />)}
        </Carousel>
      </Categories>

      {
        originals.length > 0 && (
          <Categories title='Originales Platzi'>
            <Carousel>
              {originals.map((item, index) => <CarouselItem key={`originals${index}`} {...item} />)}
            </Carousel>
          </Categories>
        )
      }
    </>
  );
};
const selectorStateHome = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(selectorStateHome, null)(Home);
