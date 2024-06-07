import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import styled from 'styled-components';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToForm = () => {
    navigate('/cadastro');
  };

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    maxWidth: '600px',
    margin: '20px auto' // Centraliza o botão horizontalmente
  };

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
  `;

  return (
    <>
      <Header />
      <Container>
        <h1>Seja bem-vindo à página inicial!</h1>
        <h2>No link abaixo você será redirecionado diretamente para o Formulário de cadastro!</h2>
        <button
          type='button'
          style={buttonStyle}
          onClick={handleNavigateToForm}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'darkblue'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'blue'}
        >
          Formulário!
        </button>
      </Container>
    </>
  );
};

export default Home;
