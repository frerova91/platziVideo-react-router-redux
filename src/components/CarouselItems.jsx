import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setFavorite, deleteFavorite } from "../actions"; // como es un index.js no necesito poner el nombre del archivo
import { Link } from "react-router-dom";
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";
import deleteIcon from "../assets/static/delete-icon.png";
import "../assets/styles/components/CarouselItems.scss";
//import Carousel from "./Carousel";

const CarouselItems = props => {
  //esta es otra forma de traer los props o podemos simplemente destructurar en donde esta const CarouselItems = (props)
  const { id, cover, title, year, contentRating, duration, isList } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration
    });
  };

  const handleDeleteFavorite = itemId => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img
              className="carousel-item__details--img"
              src={playIcon}
              alt="Play Icon"
            />
          </Link>
          {isList ? (
            <img
              className="carousel-item__details--img"
              src={deleteIcon}
              alt="Delete Icon"
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img
              className="carousel-item__details--img"
              src={plusIcon}
              alt="Plus Icon"
              onClick={handleSetFavorite}
            />
          )}
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
  id: PropTypes.number,
  isList: PropTypes.bool,
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  duaration: PropTypes.number,
  contentRaiting: PropTypes.string
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
};

export default connect(null, mapDispatchToProps)(CarouselItems);

//export default CarouselItems;
