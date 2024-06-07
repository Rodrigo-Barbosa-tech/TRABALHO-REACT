import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import styled from 'styled-components';

const Lista = ({ lista }) => {
  const navigate = useNavigate();

  const handleNavigateToCadastro = () => {
    navigate('/cadastro');
  };

  const buttonStyle = {
    height: '50px',
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '40px',
    marginBottom: '5px'
  };

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
    text-align: center;
  `;

  return (
    <>
      <Header />
      <Container>
        <h1>Lista de Cadastros</h1>
        <ul>
          {lista.map((item, index) => (
            <li key={index}>{item.nome} - {item.tipo}</li>
          ))}
        </ul>
        <button
          type='button'
          style={buttonStyle}
          onClick={handleNavigateToCadastro}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'darkblue'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'blue'}
        >
          Retornar para Cadastrar
        </button>
      </Container>
    </>
  );
};

export default Lista;
