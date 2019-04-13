import React, { Component } from 'react';
import styles from './Score.module.css';

class Score extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0
    }
  }

  render() {
    const { score } = this.state;
    
    return (
      <p className={styles.wrapper}>Score: {score}</p>
    )
  }
}

export default Score;