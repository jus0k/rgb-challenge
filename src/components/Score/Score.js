import React from 'react';
import styles from './Score.module.css';

const Score = ({ score }) => (
  <p className={styles.wrapper}>Score: {score}</p>
)

export default Score;