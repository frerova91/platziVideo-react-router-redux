import React, { useState } from "react";
import { registerRequest } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles/components/Register.scss";

const Register = props => {
  const [form, setValues] = useState({
    email: "",
    name: "",
    password: ""
  });

  const handleImput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push("/"); //el history es de react-router y con el push dirigimos a esa direccion y que esto es una simulacion hay otra mejor forma para hacer esto
    //console.log(form);
  };

  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input
            name="name"
            className="input"
            type="text"
            placeholder="Nombre"
            onChange={handleImput}
          />
          <input
            name="email"
            className="input"
            type="text"
            placeholder="Correo"
            onChange={handleImput}
          />
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={handleImput}
          />
          <button className="button">Registrarme</button>
        </form>
        <Link to="/login">Iniciar Sesion</Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest
};

//export default Register;
export default connect(null, mapDispatchToProps)(Register);
