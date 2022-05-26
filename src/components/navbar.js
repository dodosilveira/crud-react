import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand" >Produtos</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home <span className="visually-hidden">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cadastro-produto">Cadastro</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/consulta">Consulta</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar