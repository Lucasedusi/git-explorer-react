/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/33089713?v=4"
            alt="Lucas"
          />
          <div>
            <strong>lucasedusi/goBarber</strong>
            <p>Este é um repositório para a aplicação goBarber</p>
          </div>
          <FiChevronRight size={25} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/33089713?v=4"
            alt="Lucas"
          />
          <div>
            <strong>lucasedusi/goBarber</strong>
            <p>Este é um repositório para a aplicação goBarber</p>
          </div>
          <FiChevronRight size={25} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/33089713?v=4"
            alt="Lucas"
          />
          <div>
            <strong>lucasedusi/goBarber</strong>
            <p>Este é um repositório para a aplicação goBarber</p>
          </div>
          <FiChevronRight size={25} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
