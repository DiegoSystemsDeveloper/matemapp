import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Formulario = ({ guardarUsuario }) => {
  const [usuario, registrarUsuario] = useState("");
  let history = useHistory();

  const ingresarUsuario = (e) => {
    registrarUsuario(e.target.value);
  };

  const agregarUsuario = (e) => {
    e.preventDefault();

    if (usuario === "") {
      alert("Porfavor ingresa un nombre");
      return;
    }

    if (usuario.length < 2) {
      alert(usuario, "No es un nombre");
      return;
    }

    let nombreUsuario = usuario.toLowerCase();

    guardarUsuario(
      nombreUsuario.charAt(0).toUpperCase() + nombreUsuario.slice(1)
    );
    history.push("/actividades");
  };

  return (
    <div>
      <header>
        <h1>Bienvenido a MatemApp</h1>
      </header>
      <div className="contenido-principal contenido">
        <form onSubmit={agregarUsuario}>
          <input
            type="text"
            className="container-fluid form-control"
            placeholder="Ingresa tu nombre"
            onChange={ingresarUsuario}
          />
          <br />
          <input
            type="submit"
            className="btn btn-primary container-fluid"
            value="Empezar"
            color="hsl(180, 4%, 14%)"
          />
        </form>
      </div>
      <footer>
        <div style={{display: ""}}>
          <img
            role="presentation"
            alt="decorar"
            className="img-fluid"
            src="//www.gstatic.com/mobilesdk/200303_mobilesdk/ML_fore@2x.png"
            style={{position: "fixed"}}
          ></img>
        </div>
      </footer>
    </div>
  );
};

export default Formulario;
