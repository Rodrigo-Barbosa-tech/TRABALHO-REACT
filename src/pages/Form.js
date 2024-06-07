import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Select from '../components/Select';
import BodyForm from '../components/BodyForm';
import Button from '../components/Button';

const Form = ({ onSalvar }) => {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');

  const handleButtonClick = () => {
    if (!nome || !tipo) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    const novoItem = { nome, tipo };
    onSalvar(novoItem);
    setNome('');
    setTipo('');
    navigate('/lista');
  };

  return (
    <BodyForm>
      <h1>Página de Formulário</h1>
      <Input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <Select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="Aluno">Aluno</option>
        <option value="Professor">Professor</option>
        <option value="Monitor">Monitor</option>
      </Select>
      <Button type="button" onClick={handleButtonClick}>Cadastrar</Button>
    </BodyForm>
  );
};

export default Form;
