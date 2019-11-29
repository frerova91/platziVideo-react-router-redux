import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutRequest } from "../actions";
//Recuerda esta es una validacion de las variables para saber que tipo debe traer y si es requerida o no, alternativa a loq ue hacer typeScript en cierta forma.
import PropTypes from "prop-types";
import gravatar from "../utils/gravatar.js";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";

const Header = props => {
  //Destructurando props
  const { user } = props;

  // Aqui comprobamos que almenos 1 usuario exista, Array.length nos permite saber si hay elementos en un arrys pero como user es un objete necesitamos usar object.keys().length para determinar lo mismo. Si es mayor a 0 si existe un usuario.
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    // aqui pasamos un objeto vacio de esta forma reinicio el estado, ya no habria un usuario; recuerda que en este curso estamos simulando un login y logout faltaria la logica del backend para uno real.
    props.logoutRequest({});
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="icon" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <a href="/">{user.name}</a>
            </li>
          ) : null}
          {hasUser ? (
            <li>
              <a href="#logout" onClick={handleLogout}>
                Cerrar Sesion
              </a>
            </li>
          ) : (
            <li>
              <Link to="/login">Iniciar Sesion</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  logoutRequest
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
  logoutRequest: PropTypes.any.isRequired
};

//export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);
