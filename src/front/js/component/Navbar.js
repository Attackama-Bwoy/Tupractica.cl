import React from "react";
import { Link } from "react-router-dom";

const styles = {
  textDecoration: 'none',
  color: "black"
};

const stylesb = {
  textDecoration: 'none',
  color: "white"
};

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light rounded"
      aria-label="Tenth navbar example"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample08"
          aria-controls="navbarsExample08"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand"><Link to="/" style={styles}>Logo/Inicio</Link></a>
        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample08"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <Link to="/Buscador" style={styles}>Busca tu Practica</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown08"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Registrate
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdown08">
                <li>
                  <a className="dropdown-item" href="#">
                    <Link to="/RegistroAlumno" style={styles}>Registro para Alumnos</Link>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <Link to="/RegistroEmpresa" style={styles}>Registro para Empresas</Link>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className=" text-end">
          <button type="button" className="btn btn-primary me-2">
            <Link to="/AccesoAlumno" style={stylesb}>Acceso Alumno</Link>
          </button>
          <button type="button" className="btn btn-primary">
            <Link to="/AccesoEmpresa" style={stylesb}>Acceso Empresa</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};