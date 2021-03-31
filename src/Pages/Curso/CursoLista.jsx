import React from "react";
import { Link } from "react-router-dom";

function Curso() {
  return (
    <div className="curso">
      <div class="container">
        <h1 class="principal-titulo">Lista de Cursos</h1>
        <section class="principal-secao">
          <table>
            <tbody>
              <tr>
                <td>Descrição</td>
                <td>Nível de ensino</td>
                <td>Código do curso</td>
              </tr>
              <tr>
                <td>Química</td>
                <td>Técnico</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Eletrotécnica</td>
                <td>Técnico</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Mecânica</td>
                <td>Técnico</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Eletrônica</td>
                <td>Técnico</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default Curso;
