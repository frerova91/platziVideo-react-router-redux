import React, { useState } from "react";
import { connect } from "react-redux";
import { logingRequest } from "../actions"; // Recuerda si el archivo es index.js noes necesario poner el nombre al final
import { Link } from "react-router-dom";
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";
import "../assets/styles/components/Login.scss";

//NOTA: para este caso estamos omitiendo el manejo del password dentro del estado en cursos mas adelante se enseñara este tema delicado. porque no vamos a guardar esta informacion ni transmitir a ningunlado.

const Login = props => {
  //creando el estado
  const [form, setValues] = useState({
    email: ""
  });
  //funcion que maneja los imputs
  const handleImput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };
  //funcion  que se encarga de enviar los datos capturados.
  const handleSubmit = event => {
    // evitamos que mande los parametro por url, por fines practicos del proyecto.
    event.preventDefault();
    props.logingRequest(form);
    props.history.push("/");
  };

  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <input
            className="input"
            name="email"
            type="text"
            placeholder="Correo"
            onChange={handleImput}
          />
          <input
            className="input"
            name="password"
            type="password"
            placeholder="Contraseña"
            onChange={handleImput}
          />
          <button className="button">Iniciar sesión</button>
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" id="cbox1" value="first_checkbox" />
              Recuérdame
            </label>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src={googleIcon} />
            Inicia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} /> Inicia sesión con Twitter
          </div>
        </section>
        <p className="login__container--register">
          No tienes ninguna cuenta <Link to="/register">Registrate</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  logingRequest
};

//export default Login;
export default connect(null, mapDispatchToProps)(Login);
