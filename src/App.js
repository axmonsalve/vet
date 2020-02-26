import React, { Fragment, useState } from "react";
import Form from "./components/Form";

function App() {
  //Arreglo de citas
  const [appointments, setAppointments] = useState([]);

  //Funcion que tome las citas actuales y agregue las nuevas
  const createAppointment = appointment => {
    setAppointments([...appointments, appointment]);
  };
  return (
    <Fragment>
      <div className="App">
        <h1>Administrador de pacientes</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Form createAppointment={createAppointment} />
            </div>
            <div className="one-half column">
              <p>Citas aquí</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
