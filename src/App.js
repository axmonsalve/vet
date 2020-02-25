import React, { Fragment } from 'react';
import Form from './components/Form';

function App() {
  return (
    <Fragment>
      <div className="App">
        <h1>Administrador de pacientes</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Form />
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
