/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";
import { Header, RepositoryInfo, Issues } from "./styles";

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer"></img>
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/33089713?v=4"
            alt="Foto de Perfil"
          ></img>
          <div>
            <strong>lucasedusi/goBarber-back-end</strong>
            <p>descrição</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>345</strong>
            <span>Start</span>
          </li>
          <li>
            <strong>45</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link
          to="tteteet"
        >
          <div>
            <strong>name of repository</strong>
            <p>description of repository</p>
          </div>
          <FiChevronRight size={25} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
