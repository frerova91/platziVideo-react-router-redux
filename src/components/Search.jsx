import React from "react";
import { connect } from "react-redux";
import { searchVideoTitle } from "../actions";
import className from "classnames";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItems";
import Modal from "../components/Modal";

import "../assets/styles/components/Search.scss";

const Search = props => {
  const { isHome, search } = props;

  const hasSearch = Object.keys(search).length > 0;

  const inputStyle = className("input", {
    isHome
  });

  const handleImput = e => {
    props.searchVideoTitle(e.target.value);
  };

  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input
        name="searchBar"
        type="text"
        className={inputStyle}
        placeholder="Buscar..."
        onChange={handleImput}
      />
      {hasSearch ? (
        <Modal>
          <Categories title="Resultados">
            <Carousel>
              {search.map((item, index) => (
                <CarouselItem key={index} {...item} />
              ))}
            </Carousel>
          </Categories>
        </Modal>
      ) : null}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    search: state.search
  };
};

const mapDispatchToProps = {
  searchVideoTitle
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
