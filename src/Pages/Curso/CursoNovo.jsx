import React from "react";
import { Link } from "react-router-dom";

function Curso() {
  return (
    <div className="curso">
      <div class="container">
        <h1 class="principal-titulo">Curso</h1>
        <section class="principal-secao">
          <h2 class="principal-secao__titulo">Dados gerais</h2>
          <form action="">
            <div>
              <label>* Descrição:</label>
              <input type="text" />
            </div>
            <div>
              <label>* Nível de ensino:</label>
              <input type="text" />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Curso;
