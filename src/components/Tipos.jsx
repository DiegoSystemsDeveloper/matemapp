import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

const Tipos = ({ usuario }) => {
  let history = useHistory();
  let user = usuario;

  const cerrarSesion = (e) => {
    e.preventDefault();
    history.push("/");
    window.sessionStorage.setItem("usuario", "");
  };

  return (
    <Fragment>
      {user === "" ? (
        history.push("/")
      ) : (
        <div>
          <div className="row">
            <h1>{usuario}</h1>
            <div className="ml-auto p-3">
              <button className="btn btn-danger" onClick={cerrarSesion}>
                <h6>
                  Cerrar sesion{" "}
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-arrow-bar-right"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"
                    />
                  </svg>
                </h6>
              </button>
            </div>
          </div>
          <div className="row clases">
            <div
              className="col-sm-3 actividad btn btn-primary"
              onClick={() => {
                history.push("/sumas");
              }}
            >
              <h6>SUMAS</h6>
            </div>
            <div
              className="col-sm-3 actividad btn btn-primary"
              onClick={() => {
                history.push("/restas");
              }}
            >
              <h6>RESTAS</h6>
            </div>
            <div
              className="col-sm-3 actividad btn btn-primary"
              onClick={() => {
                history.push("/multiplicaciones");
              }}
            >
              <h6>MULTIPLICACIONES</h6>
            </div>
            <div className="col-sm-3 actividad btn btn-primary">
              <h6>OPERACIONES CON FRACCIONARIOS</h6>
            </div>
          </div>
          <div className="text-center">
            <h4>Escoge la actividad que deseas realizar</h4>
          </div>
          <div className="float-right">
            <img
              alt="decorar"
              srcSet="https://firebase.google.com/images/support/support-illo.png 2x,https://firebase.google.com/images/support/support-illo.png 1x"
            ></img>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Tipos;
