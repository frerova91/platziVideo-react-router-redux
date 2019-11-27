import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setFavorite } from "../actions"; // como es un index.js no necesito poner el nombre del archivo
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";
import "../assets/styles/components/CarouselItems.scss";
//import Carousel from "./Carousel";

const CarouselItems = props => {
  //esta es otra forma de traer los props o podemos simplemente destructurar en donde esta const CarouselItems = (props)
  const { cover, title, year, contentRating, duration } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      cover,
      title,
      year,
      contentRating,
      duration
    });
  };

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            src={playIcon}
            alt="Play Icon"
          />
          <img
            className="carousel-item__details--img"
            src={plusIcon}
            alt="Plus Icon"
            onClick={handleSetFavorite}
          />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year}${contentRating}${duration}`}
        </p>
      </div>
    </div>
  );
};
//Esta es una alternativa a lo que hace typeScript que es definir el tipo de valor que traen las variables.
// Aunque paresca raro por convencion el propType= siempre comensara con minuscula.
CarouselItems.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  duaration: PropTypes.number,
  contentRaiting: PropTypes.string
};

const mapDispatchToProps = {
  setFavorite
};

export default connect(null, mapDispatchToProps)(CarouselItems);

//export default CarouselItems;
