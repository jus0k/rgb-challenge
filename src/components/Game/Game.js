import React from 'react';
import styles from './Game.module.css';
import Score from '../Score';
import ColorCode from '../ColorCode';

const Game = () => (
  <div className={styles.wrapper}>
    <Score />
    <div className={styles.centered}>
      <ColorCode />
    </div>
  </div>
)

export default Game;