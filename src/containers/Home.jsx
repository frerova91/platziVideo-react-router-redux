import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Search from "../components/Search.jsx";
import Categories from "../components/Categories.jsx";
import Carousel from "../components/Carousel.jsx";
import CarouselItems from "../components/CarouselItems.jsx";
import useInitialState from "../hooks/useInitialState.js";

import "../assets/styles/App.scss";

//const API = "http://localhost:3000/initialState"; desde que se empezo a utilizar redux.

const Home = ({ myList, trends, originals }) => {
  //const initialState = useInitialState(API); desde que se empezo a utilizar redux.
  // return initialState.length === 0 ? ( <h1>Loading...</h1>) : desde que se empezo a utilizar redux.
  return (
    <>
      {/* <Header /> en desuso desde que aplicamos el component Layout */}
      <Search />

      {myList.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {trends.map(item => (
              <CarouselItems key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item => (
            <CarouselItems key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="PlatziVideo :)">
        <Carousel>
          {originals.map(item => (
            <CarouselItems key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      {/* <Footer /> en desuso desde que aplicamos el component Layout */}
    </>
  );
};

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  };
};

export default connect(mapStateToProps, null)(Home);
// export default Home; desde que se empezo a utilizar redux.
