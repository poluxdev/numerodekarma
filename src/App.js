import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap
import Uno from './components/1';
import Dos from './components/2';
import Tres from './components/3';
import Cuatro from './components/4';
import Cinco from './components/5';
import Seis from './components/6';
import Siete from './components/7';
import Ocho from './components/8';
import Nueve from './components/9';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [mes, setMes] = useState('');
  const [numeroKarma, setNumeroKarma] = useState(null);

  const manejarCambioMes = (e) => {
    setMes(e.target.value);
    const numero = reducirMes(e.target.value);
    setNumeroKarma(numero);
  };

  const reducirMes = (mes) => {
    if (!mes) return null;
    let numero = parseInt(mes);
    while (numero > 9) {
      numero = numero.toString().split('').reduce((acc, num) => acc + parseInt(num), 0);
    }
    return numero;
  };

  const renderSignificado = () => {
    switch (numeroKarma) {
      case 1: return <Uno mes={mes} />;
      case 2: return <Dos mes={mes} />;
      case 3: return <Tres mes={mes} />;
      case 4: return <Cuatro mes={mes} />;
      case 5: return <Cinco mes={mes} />;
      case 6: return <Seis mes={mes} />;
      case 7: return <Siete mes={mes} />;
      case 8: return <Ocho mes={mes} />;
      case 9: return <Nueve mes={mes} />;
      default: return <p>Introduce un mes válido</p>;
    }
  };

  return (
    <div className="App container mt-4">
      <h1 className="text-center mb-4">Descubre tu Número de Karma</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <select className="form-control mb-3" value={mes} onChange={manejarCambioMes}>
            <option value="">Selecciona tu mes de nacimiento</option>
            <option value="1">Enero</option>
            <option value="2">Febrero</option>
            <option value="3">Marzo</option>
            <option value="4">Abril</option>
            <option value="5">Mayo</option>
            <option value="6">Junio</option>
            <option value="7">Julio</option>
            <option value="8">Agosto</option>
            <option value="9">Septiembre</option>
            <option value="10">Octubre</option>
            <option value="11">Noviembre</option>
            <option value="12">Diciembre</option>
          </select>
        </div>
      </div>
      <motion.div
        className="significado-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: numeroKarma ? 1 : 0, scale: numeroKarma ? 1 : 0.9 }}
        transition={{ duration: 0.5 }}
      >
        {renderSignificado()}
      </motion.div>
    </div>
  );
}

export default App;
