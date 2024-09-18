import React from 'react';

function Tres({ mes }) {
  return (
    <div className="card">
      <h2 className="card-title">Número de Karma 3</h2>
      <p>
        Una persona con el número de karma 3 enfrenta lecciones y desafíos relacionados con los temas de expresión creativa, comunicación y alegría de vivir. Aquí están algunas de las áreas clave que deben trabajar:
      </p>
      <ul>
        <li>
          <strong>Desarrollar la Expresión Creativa:</strong> Las personas con karma 3 deben aprender a canalizar su creatividad de manera productiva. Esto puede implicar el desarrollo de talentos artísticos, musicales, o cualquier forma de expresión creativa.
        </li>
        <li>
          <strong>Mejorar la Comunicación:</strong> Este número está asociado con la necesidad de comunicarse de manera clara y efectiva. Las personas con karma 3 deben aprender a expresar sus pensamientos y emociones sin temor al juicio.
        </li>
        <li>
          <strong>Fomentar la Alegría y el Optimismo:</strong> El desafío es mantener una actitud positiva ante la vida, incluso en tiempos difíciles. Las personas con karma 3 deben aprender a encontrar y compartir la alegría y el optimismo con los demás.
        </li>
        <li>
          <strong>Evitar la Superficialidad:</strong> Las personas con karma 3 pueden sentirse tentadas a enfocarse en lo superficial o en lo trivial. Deben aprender a profundizar en sus relaciones y en su autoconocimiento.
        </li>
        <li>
          <strong>Desarrollar la Disciplina:</strong> El karma 3 también está relacionado con la necesidad de estructurar y disciplinar su energía creativa. Esto incluye aprender a seguir proyectos hasta el final y evitar la dispersión de esfuerzos.
        </li>
        <li>
          <strong>Construir Relaciones Positivas:</strong> Las personas con este número deben trabajar en construir relaciones que fomenten su crecimiento emocional y creativo, evitando entornos negativos que puedan drenar su energía.
        </li>
      </ul>
      <p><strong>Mes de nacimiento seleccionado:</strong> {mes}</p>
    </div>
  );
}

export default Tres;
