import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

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
      handleClickOpen()
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
        <DialogTitle id="alert-dialog-title"><h1 className="text-dark">{title}</h1></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className="text-dark">
            Hola {usuario} tu puntaje para las {title} es: {puntaje}/5
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {handleClose(); history.push("/actividades")}} color="primary">
            Entendido
          </Button>
        </DialogActions>
      </Dialog>
    </div>
      <div>
        <h1>{title}</h1>
      </div>
      <div className="center p-4">
        <br />
        <div className="m-l-r">
          <div className="text-center pregunta">{pregunta}</div>
          <br />
          <div className="form-check m-l-r">
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
          <br />
          <div className="form-check m-l-r">
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
          <br />
          <div className="form-check m-l-r">
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
          <br />
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
      <img
        srcSet="https://firebase.google.com/images/footer/footer-illo_2x.png 2x,https://firebase.google.com/images/footer/footer-illo_1x.png 1x"
        src="/images/footer/footer-illo_1x.png"
        alt="Ilustración de desarrolladores conversando"
        style={{position: 'fixed'}}
      ></img> 
    </div>
  );
};

export default Pregunta;
