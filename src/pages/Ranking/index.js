import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Container, Header, Table } from './styles';
import LeftArrow from '../../assets/icons/left-arrow.svg';

import api from '../../services/api';

const Ranking = () => {
  const [rank, setRank] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await api.getRank();
      setRank(data);
    })()
  }, []);

  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">
            <img src={LeftArrow} alt="Voltar" width={32} />
          </Link>
          <p>Ranking</p>
        </nav>
      </Header>
      { rank.length !== 0 ? <Table>
        <tbody>
          {rank.map(({ name, score }, index) => (
            <tr key={`${name}-${score}`}>
              <td>{index + 1}</td>
              <td>{name}</td>
              <td>{score}</td>
            </tr>
          ))}
        </tbody>
      </Table> : <p>Carregando...</p>}
    </Container>
  )
};

export default Ranking;