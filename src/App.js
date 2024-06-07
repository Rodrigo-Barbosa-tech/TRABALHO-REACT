import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/cadastro';
import Lista from './pages/Lista';

const App = () => {
  const [lista, setLista] = useState([]);

  const adicionarItem = (novoItem) => {
    setLista([...lista, novoItem]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro onSalvar={adicionarItem} />} />
        <Route path="/lista" element={<Lista lista={lista} />} />
      </Routes>
    </Router>
  );
};

export default App;
