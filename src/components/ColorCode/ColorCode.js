import React from 'react';
import styles from './ColorCode.module.css';

const ColorCode = ({ answers }) => (
  <p className={styles.wrapper}>{answers.color}</p>
)

export default ColorCode;