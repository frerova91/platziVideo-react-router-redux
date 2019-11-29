import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getVideoSource } from "../actions";
//import { Redirect } from "react-router-dom";  otra forma de mostrar un notfound
import "../assets/styles/components/Player.scss";
import NotFound from "../containers/NotFound.jsx";

const Player = props => {
  //esta parte nos la manda router al momento de generar la ruta /play/:id, de estaforma hacemos un match a los paramtros que pasamos y asi podemos hacer validaciones, o hacer algun effecto.
  const { id } = props.match.params;

  //Ahora validemos que realmente hay un vieo que se este ejecuetando o no existe dentro de nuestro reducer.
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []); //Recuerda pasarle siempre este segundo argumento para no tener un loop infinito

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

//Obteniendo la info de mi estado de playing:{}, como necesitamos tambien filtar este id creamos un action y como creo un action necesito mi reducer con la logica correcpondiente para evaluar si el id existe y coincida con el payload.
const mapStateToProps = state => {
  return { playing: state.playing };
};

const mapDispatchToProps = {
  getVideoSource
};

//export default Player;
export default connect(mapStateToProps, mapDispatchToProps)(Player);
