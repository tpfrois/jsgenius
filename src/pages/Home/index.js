import React from 'react';

import { Link } from 'react-router-dom';
import * as Tone from 'tone';


import { Container } from './styles.js';
import Button from '../../components/Button';

import RankIcon from '../../assets/icons/ranking.svg';
import Logo from '../../assets/icons/logo.svg';

const Home = () => (
  <Container>
    <nav>
      <Link to="/ranking">
        <img src={RankIcon} alt="Ranking" width={32} />
      </Link>
    </nav>

    <img src={Logo} alt="JS G3n1u5" className="logo" width={225} />

    <Link to="/game"><Button onClick={async () => { await Tone.start() }}>Iniciar Jogo</Button></Link>
  </Container>
)

export default Home;