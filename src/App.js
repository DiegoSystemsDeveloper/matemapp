import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Tipos from './components/Tipos';
import Pregunta from './components/Pregunta'
import api from './matemapp-api-export'
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  window.onpopstate = function (e) { 
    window.history.forward(1); 
    setIndex(0); 
    setPuntajeSumas(0);
    setPuntajeRestas(0);
    setPuntajeMultiplicaciones(0)
    }

  const [index, setIndex] = useState(0);
  const [puntajeSumas, setPuntajeSumas] = useState(0)
  const [puntajeRestas, setPuntajeRestas] = useState(0)
  const [puntajeMultiplicaciones, setPuntajeMultiplicaciones] = useState(0)
  const [puntajeFracciones, setPuntajeFracciones] = useState(0)
  const sumas = api[0].sumas
  const multiplicaciones = api[0].multiplicaciones
  const restas = api[0].restas
  const fracciones = api[0].fracciones

  let usuarioInicial = (window.sessionStorage.getItem('usuario'));
  if (usuarioInicial == null) {
    usuarioInicial = "";
  }

  const [usuario, guardarUsuario] = useState(usuarioInicial);

  useEffect(() => {
    window.sessionStorage.setItem('usuario', usuario);
  }, [usuario]);

  const arregloSumas = [
    sumas.pregunta1,
    sumas.pregunta2,
    sumas.pregunta3,
    sumas.pregunta4,
    sumas.pregunta5
  ];

  const arregloRestas = [
    restas.pregunta1,
    restas.pregunta2,
    restas.pregunta3,
    restas.pregunta4,
    restas.pregunta5
  ];

  const arregloMultiplicaciones = [
    multiplicaciones.pregunta1,
    multiplicaciones.pregunta2,
    multiplicaciones.pregunta3,
    multiplicaciones.pregunta4,
    multiplicaciones.pregunta5
  ];

  const arregloFracciones = [
    fracciones.pregunta1,
    fracciones.pregunta2,
    fracciones.pregunta3,
    fracciones.pregunta4,
    fracciones.pregunta5
  ];
  
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Formulario
              guardarUsuario={guardarUsuario}
            />
          </Route>
          <Route path="/actividades">
            <Tipos
              usuario={usuario}
            />
          </Route>
          <Route path="/sumas">
            <Pregunta
              usuario={usuario}
              title="Sumas"
              actividad={sumas}
              index={index}
              setIndex={setIndex}
              pregunta={arregloSumas[index] === undefined ? null : arregloSumas[index].valor}
              setPuntaje={setPuntajeSumas}
              puntaje={puntajeSumas}
            />
          </Route>
          <Route path="/restas">
            <Pregunta
              usuario={usuario}
              title="Restas"
              actividad={restas}
              index={index}
              setIndex={setIndex}
              pregunta={arregloRestas[index] === undefined ? null : arregloRestas[index].valor}
              setPuntaje={setPuntajeRestas}
              puntaje={puntajeRestas}
            />
          </Route>
          <Route path="/multiplicaciones">
            <Pregunta
              usuario={usuario}
              title="Multiplicaciones"
              actividad={multiplicaciones}
              index={index}
              setIndex={setIndex}
              pregunta={arregloMultiplicaciones[index] === undefined ? null : arregloMultiplicaciones[index].valor}
              setPuntaje={setPuntajeMultiplicaciones}
              puntaje={puntajeMultiplicaciones}
            />
          </Route>
          <Route path="/fracciones">
            <Pregunta
              usuario={usuario}
              title="Operaciones con Fracciones"
              actividad={fracciones}
              index={index}
              setIndex={setIndex}
              pregunta={arregloFracciones[index] === undefined ? null : arregloFracciones[index].valor}
              setPuntaje={setPuntajeFracciones}
              puntaje={puntajeFracciones}
            />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
