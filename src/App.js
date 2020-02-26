import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Appointment from "./components/Appointment";
function App() {
  //Citas en localStorage
  let initialAppointments = JSON.parse(localStorage.getItem("appointments"));
  if (!initialAppointments) {
    initialAppointments = [];
  }

  //Arreglo de citas
  const [appointments, setAppointments] = useState(initialAppointments);

  //useEffect para cuando el state cambie
  useEffect(() => {
    if (initialAppointments) {
      localStorage.setItem("appointments", JSON.stringify(appointments));
    } else {
      localStorage.setItem("appointments", JSON.stringify([]));
    }
  }, [appointments]);

  //Funcion que tome las citas actuales y agregue las nuevas
  const createAppointment = appointment => {
    setAppointments([...appointments, appointment]);
  };

  //Función que elimina la cita segun el id
  const deleteAppointment = id => {
    const newAppointments = appointments.filter(
      appointment => appointment.id !== id
    );
    setAppointments(newAppointments);
  };
  //Mensaje condicional
  const title =
    appointments.length === 0 ? "No hay citas" : "Administra las citas";
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
              <h2>{title}</h2>
              {appointments.map(appointment => (
                <Appointment
                  key={appointment.id}
                  appointment={appointment}
                  deleteAppointment={deleteAppointment}
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
