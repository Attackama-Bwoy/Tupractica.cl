import React from "react";

function Anexos(info=[]) {
  return (
    <div className="container">
      <div className="row justify-content-start pt-5">
        <h2 className="pb-2 border-bottom">Mis Documento</h2>
      </div>
      <div className="row justify-content-start">
        <div className="col-3">
          <label>Anexo 1:</label>
        </div>
        <div className="col-9">
          {info.anexo1}
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <label>Anexo 2:</label>
        </div>
        <div className="col-9">
          {info.anexo2}
        </div>
      </div>
    </div>
  );
}

export default Anexos;
