import React, { Fragment } from "react";

const Form = () => {
  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="pet"
          id=""
          className="u-full-width"
          placeholder="Nombre de la mascota"
        />
        <label>Nombre del Dueño</label>
        <input
          type="text"
          name="owner"
          id=""
          className="u-full-width"
          placeholder="Nombre del dueño"
        />
        <label>Fecha</label>
        <input type="date" name="date" id="" className="u-full-width" />
        <label>Hora</label>
        <input type="time" name="time" id="" className="u-full-width" />
        <label>Síntomas</label>
        <textarea className="u-full-width"></textarea>
        <button
            type="button"
            className="u-full-width button-primary"
        >Agregar Cita</button>
      </form>
    </Fragment>
  );
};

export default Form;
