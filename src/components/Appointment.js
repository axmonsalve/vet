import React from 'react'

const Appointment = ( { appointment } ) => ( 
    <div className="cita">
        <p>Mascota: <span>{appointment.pet}</span></p>
        <p>Dueño: <span>{appointment.owner}</span></p>
        <p>Fecha: <span>{appointment.date}</span></p>
        <p>Hora: <span>{appointment.time}</span></p>
        <p>Síntomas: <span>{appointment.symptoms}</span></p>
    </div>
 );

 
export default Appointment;