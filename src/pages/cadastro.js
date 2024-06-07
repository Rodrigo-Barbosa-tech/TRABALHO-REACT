import React from 'react';
import Form from './Form';
import Header from '../components/Header/Header';

const Cadastro = ({ onSalvar }) => {
  return (
    <>
      <Header />
      <Form onSalvar={onSalvar} />
    </>
  );
};

export default Cadastro;
