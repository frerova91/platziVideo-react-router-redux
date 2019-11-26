import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import Search from "../components/Search.jsx";
import Categories from "../components/Categories.jsx";
import Carousel from "../components/Carousel.jsx";
import CarouselItems from "../components/CarouselItems.jsx";
import Footer from "../components/Footer.jsx";
import useInitialState from "../hooks/useInitialState.js";

import "../assets/styles/App.scss";

const API = "http://localhost:3000/initialState";

const Home = () => {
  const initialState = useInitialState(API);

  return initialState.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="App">
      <Header />
      <Search />

      {initialState.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {initialState.trends.map(item => (
              <CarouselItems key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends.map(item => (
            <CarouselItems key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="PlatziVideo :)">
        <Carousel>
          {initialState.trends.map(item => (
            <CarouselItems key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default Home;
