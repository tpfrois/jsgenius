import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Tone from 'tone';

import { Container, Display, KeyPad, Key } from './styles.js';

import { randomKeyPadNumber, timer } from '../../utils/helpers';

const Game = () => {
  const history = useHistory();

  const synth = new Tone.PolySynth(Tone.Synth).toDestination();

  const [score, setScore] = useState(0);
  const [display, setDisplay] = useState("-");
  const [isKeyPadDisabled, setIsKeyPadDisabled] = useState(false);
  const [combination, setCombination] = useState([]);
  const [playerPosition, setPlayerPosition] = useState(0);

  const audios = {
    playNote: (note) => {
      synth.triggerAttackRelease(note, "8n");
    },
    missed: () => {
      const now = Tone.now();

      synth.triggerAttack("G3", now);
      synth.triggerAttack("G2", now + 0.2);
      synth.triggerAttack("B2", now + 0.4);
      synth.triggerRelease(["G3", "G2", "B2"], now + 1);
    },
    display: () => {
      synth.triggerAttackRelease("C5", "8n");
    },

  }

  const newRound = useCallback(() => {
    const randomNumber = randomKeyPadNumber();
    setCombination([...combination, randomNumber]);
    setPlayerPosition(0);
  }, [combination]);

  const handleKeyClick = useCallback((e) => {

    setIsKeyPadDisabled(true);

    const audioNote = e.target.getAttribute('data-audio');
    audios.playNote(audioNote);

    const numberPressed = parseInt(e.target.value);

    const missed = numberPressed !== combination[playerPosition];

    if (missed) {
      audios.missed();
      history.push('/endgame', { score });
      return;
    }

    const combinationPosition = combination.length - 1;

    if (playerPosition === combinationPosition) {
      setScore(score + 1);
      newRound();
    } else {
      setPlayerPosition(playerPosition + 1);
      setIsKeyPadDisabled(false);
    }

  }, [combination, playerPosition, score]);

  const displayCombination = useCallback(async () => {
    await timer(300);
    setIsKeyPadDisabled(true);

    for (let i = 0; i < combination.length; i++) {
      const currentNumber = combination[i];
      setDisplay(currentNumber);
      audios.display();
      await timer(300);
      setDisplay('');
      await timer(50);
    }

    setDisplay('-');
    setIsKeyPadDisabled(false);
  }, [combination]);

  // Starts the game when the page is loaded
  useEffect(newRound, []);

  useEffect(() => {
    displayCombination();
  }, [combination]);

  return (
    <Container>
      <Display>
        {display}
      </Display>
      <KeyPad>
        <Key type="button" value="1" data-audio="F3" onClick={handleKeyClick} disabled={isKeyPadDisabled}>1</Key>
        <Key type="button" value="2" data-audio="G3" onClick={handleKeyClick} disabled={isKeyPadDisabled}>2</Key>
        <Key type="button" value="3" data-audio="A3" onClick={handleKeyClick} disabled={isKeyPadDisabled}>3</Key>
        <Key type="button" value="4" data-audio="B3" onClick={handleKeyClick} disabled={isKeyPadDisabled}>4</Key>
        <Key type="button" value="5" data-audio="C4" onClick={handleKeyClick} disabled={isKeyPadDisabled}>5</Key>
        <Key type="button" value="6" data-audio="D4" onClick={handleKeyClick} disabled={isKeyPadDisabled}>6</Key>
        <Key type="button" value="7" data-audio="E4" onClick={handleKeyClick} disabled={isKeyPadDisabled}>7</Key>
        <Key type="button" value="8" data-audio="F4" onClick={handleKeyClick} disabled={isKeyPadDisabled}>8</Key>
        <Key type="button" value="9" data-audio="G4" onClick={handleKeyClick} disabled={isKeyPadDisabled}>9</Key>
      </KeyPad>
    </Container>
  )
}

export default Game;