import React, { useState } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import api from '../../services/api';

import Button from '../../components/Button';
import { Container, Header } from './styles';
import CloseIcon from '../../assets/icons/close.svg'


const EndGame = () => {
  let score = 0;

  const history = useHistory();
  const location = useLocation();

  const [error, setError] = useState(false);
  const [name, setName] = useState("");

  if (location.state) score = location.state.score;

  const handleSubmit = async () => {
    if (!name) {
      setError(true);
      return;
    }
    await api.postRank({ name, score });
    history.push('/ranking');
  }


  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">
            <img src={CloseIcon} alt="Fechar" width={32} />
          </Link>
        </nav>
      </Header>
      <h1>Fim do Jogo</h1>
      <div className="score-container">
        <span>score</span>
        <p>{score}</p>
      </div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} style={{ borderColor: error ? '#c53030' : '#1F6F8B' }} placeholder="Digite seu nome" />
      <Button onClick={handleSubmit}>Salvar Ranking</Button>
    </Container>
  )
};

export default EndGame;