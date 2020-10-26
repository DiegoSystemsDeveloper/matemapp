import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const Pregunta = ({
  usuario,
  title,
  actividad,
  index,
  setIndex,
  pregunta,
  puntaje,
  setPuntaje,
}) => {
  const [respuesta, setRespuesta] = useState(null);
  let history = useHistory();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const arreglo = [
    actividad.pregunta1,
    actividad.pregunta2,
    actividad.pregunta3,
    actividad.pregunta4,
    actividad.pregunta5,
  ];

  // funcion para deschequear radio botones
  const uncheckeds = () => {
    document.getElementById("opcion1").checked = false;
    document.getElementById("opcion2").checked = false;
    document.getElementById("opcion3").checked = false;
  };

  // funcion para validar que haya escogido una opcion
  const noHayOpcionesSeleccionadas =
    respuesta === undefined || respuesta === null || respuesta === ""
      ? true
      : false;

  // onclick en el formulario
  const responder = (e) => {
    e.preventDefault();
    if (noHayOpcionesSeleccionadas) {
      alert("no has escogido");
      return;
    }

    if (parseInt(respuesta, 10) === arreglo[index].correcta) {
      setPuntaje(puntaje + 1);
    }

    if (index === arreglo.length - 1) {
      setIndex(0);
      setRespuesta("");
      handleClickOpen();
      return;
    }

    setIndex(index + 1);
    setRespuesta("");
    uncheckeds();
  };

  return usuario === "" ? (
    <div className="text-center">
      <div>No hay un usuario registrado</div>
      <br />
      <input
        type="submit"
        className="btn btn-primary"
        value="Ingresar usuario"
        onClick={history.push("/")}
      />
    </div>
  ) : (
    <div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <h2 className="text-dark">{title}</h2>
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              className="text-dark"
            >
              Hola {usuario} tu puntaje para las {title} es: {puntaje}/5
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleClose();
                history.push("/actividades");
              }}
              color="primary"
            >
              Entendido
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <h1>{title}</h1>
      <div className="row p-4">
        <div className="col-sm-4 offset-sm-4 tarjeta mt-4">
          <div className="card">
            <img
              src="https://keep.google.com/u/0/media/v2/1jP42r_nQms1DqHOexpsr-PkVrgGqI-Zpv6z-mS2jP6NsbMqIyY7ClsDRSmCT/133l2TS9FgG6lmO8K9TuEMYA9fZW4dEuX465sbgf74OlbOIbPM_P65TfwFvOT4g?accept=image/gif,image/jpeg,image/jpg,image/png,image/webp,audio/aac&sz=626"
              className="imagen"
              alt="mi imagen"
            />
            <div className="card-body">
              <h2 className="card-title text-center">{pregunta}</h2>
              <br />
              <h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="opcion1"
                    value={arreglo[index].opciones.opcion1}
                    onChange={(e) => {
                      setRespuesta(e.currentTarget.value);
                    }}
                  />
                  <label className="form-check-label">
                    {arreglo[index].opciones.opcion1}
                  </label>
                </div>
              </h5>
              <br />
              <h5>
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="opcion2"
                    value={arreglo[index].opciones.opcion2}
                    onChange={(e) => {
                      setRespuesta(e.currentTarget.value);
                    }}
                  />
                  <label className="form-check-label">
                    {arreglo[index].opciones.opcion2}
                  </label>
                </div>
              </h5>
              <br />
              <h5>
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="opcion3"
                    value={arreglo[index].opciones.opcion3}
                    onChange={(e) => {
                      setRespuesta(e.currentTarget.value);
                    }}
                  />
                  <label className="form-check-label">
                    {arreglo[index].opciones.opcion3}
                  </label>
                </div>
              </h5>
            </div>
          </div>
          <br />
          <div className="text-center">
            <input
              className="btn btn-primary"
              type="submit"
              id="submit"
              value="Siguiente"
              onClick={responder}
            />
          </div>
        </div>
      </div>
      <div className="imagen"></div>
    </div>
  );
};

export default Pregunta;
