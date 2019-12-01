import React from "react";
import "../assets/styles/components/Categories.scss";

const Categories = ({ children, title }) => (
  // El siguiente es un error a proposito para ver mejor reactDevtols de los navegadores.
  <div className="categories">
    <h3 className="categories__title">{title}</h3>
    {children}
  </div>
);

export default Categories;
