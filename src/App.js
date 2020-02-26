import React, { Fragment, useState } from "react";
import Form from "./components/Form";
import Appointment from './components/Appointment';
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
              <h2>Administra las citas</h2>
              {appointments.map(appointment => (
                <Appointment 
                  key={appointment.id}
                  appointment={appointment}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
