import React, { Fragment, useState } from "react";

const Form = () => {
  //Crear state de citas
  const [meeting, setMeeting] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    symptoms: ""
  });

  //Funcion que se ejecuta cuando el usuario escribe en un input
  const handleChange = e => {
    //Funcion con el objeto para llenar el state
    setMeeting({
      //Tomamos una copia del state
      ...meeting,
      //Escribimos en el campo seleccionado
      [e.target.name]: e.target.value
    });
  };

  //Destructuring del state (objeto)
  const { pet, owner, date, time, symptoms } = meeting;
  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Nombre de la mascota"
          onChange={handleChange}
          value="pet"
        />
        <label>Nombre del Dueño</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Nombre del dueño"
          onChange={handleChange}
          value="owner"
        />
        <label>Fecha</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value="date"
        />
        <label>Hora</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleChange}
          value="time"
        />
        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="symptoms"
          onChange={handleChange}
          value="symptoms"
        ></textarea>
        
        <button
          type="button"
          name="symptoms"
          className="u-full-width button-primary"
        >
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
