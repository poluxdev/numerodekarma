import React from 'react';

function Cinco({ mes }) {
  return (
    <div className="card">
      <h2 className="card-title">Número de Karma 5</h2>
      <p>
        Una persona con el número de karma 5 enfrenta lecciones y desafíos relacionados con los temas de libertad, cambio y adaptación. Aquí están algunas de las áreas clave que deben trabajar:
      </p>
      <ul>
        <li>
          <strong>Aprender a Adaptarse:</strong> Las personas con karma 5 deben aprender a adaptarse a los cambios y a ser flexibles en su enfoque. La vida puede presentarles muchas transiciones, y deben estar preparados para manejarlas con gracia.
        </li>
        <li>
          <strong>Gestionar la Libertad:</strong> El número 5 está asociado con una fuerte necesidad de libertad e independencia. Las personas con este karma deben encontrar un equilibrio entre disfrutar de su libertad y cumplir con sus responsabilidades.
        </li>
        <li>
          <strong>Explorar Nuevas Experiencias:</strong> Las personas con karma 5 tienen un espíritu aventurero y una inclinación natural hacia la exploración. Deben aprovechar esta energía para descubrir nuevas oportunidades y expandir sus horizontes.
        </li>
        <li>
          <strong>Evitar la Dispersión:</strong> El desafío es evitar dispersarse en demasiadas direcciones a la vez. Deben aprender a enfocarse en sus prioridades y a no dejarse llevar por distracciones constantes.
        </li>
        <li>
          <strong>Desarrollar la Tolerancia:</strong> A medida que exploran nuevas experiencias, deben aprender a ser tolerantes con diferentes puntos de vista y culturas. La apertura mental es clave para su crecimiento personal.
        </li>
        <li>
          <strong>Gestionar la Impulsividad:</strong> Las personas con karma 5 a menudo enfrentan el reto de controlar su impulsividad. Deben aprender a tomar decisiones de manera reflexiva y a no actuar de manera precipitada.
        </li>
      </ul>
      <p><strong>Mes de nacimiento seleccionado:</strong> {mes}</p>
    </div>
  );
}

export default Cinco;
