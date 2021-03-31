import React from "react";
import { Link } from "react-router-dom";

function Curso() {
  return (
    <div className="curso">
      <div class="container">
        <h1 class="principal-titulo">Curso</h1>
        <section class="principal-secao">
          <div className="lista-acoes">
            <Link to="/curso-lista">Lista de cursos</Link>
            <Link to="/curso-novo">Novo curso</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Curso;
