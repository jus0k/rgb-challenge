import React from 'react';
import styles from './Game.module.css';
import Score from '../Score';
import ColorCode from '../ColorCode';
import Answers from '../Answers';

const Game = ({
  answers,
  correctAnswerIndex,
  score,
  selectedIndex,
  selectAnswer
}) => (
  <div className={styles.wrapper}>
    <Score score={score} />
    <div className={styles.centered}>
      <ColorCode answers={answers[correctAnswerIndex]} />
      <Answers
        answers={answers}
        selectAnswer={selectAnswer}
        selectedIndex={selectedIndex}
      />
    </div>
  </div>
)

export default Game;