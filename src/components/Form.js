import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';

const Form = ({ createAppointment }) => {
  //Crear state de citas
  const [appointment, setAppointment] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    symptoms: ""
  });

  //State para el error
  const [error, setError] = useState(false);

  //Funcion que se ejecuta cuando el usuario escribe en un input
  const handleChange = e => {
    //Funcion con el objeto para llenar el state
    setAppointment({
      //Tomamos una copia del state
      ...appointment,
      //Escribimos en el campo seleccionado
      [e.target.name]: e.target.value
    });
  };

  //Destructuring del state (objeto)
  const { pet, owner, date, time, symptoms } = appointment;

  //Cuando el usuario envia el formaulario
  const appointmentSubmit = e => {
    e.preventDefault();

    //Validar
    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      time.trim() === "" ||
      date.trim() === "" ||
      symptoms.trim() === ""
    ) {
      setError(true);
      return;
    }
    //Ocultar el mensaje de error
    setError(false);

    //Crear la cita
    appointment.id = uuidv4(); //Asignando un id
    createAppointment(appointment);

    //Reiniciar formulario
    setAppointment({
      pet: "",
      owner: "",
      date: "",
      time: "",
      symptoms: ""
    });
  };
  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={appointmentSubmit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Nombre de la mascota"
          onChange={handleChange}
          value={pet}
        />
        <label>Nombre del Dueño</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Nombre del dueño"
          onChange={handleChange}
          value={owner}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />
        <label>Hora</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleChange}
          value={time}
        />
        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="symptoms"
          onChange={handleChange}
          value={symptoms}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

Form.propTypes= {
    createAppointment: PropTypes.func.isRequired
}
export default Form;
