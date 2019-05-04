import React, { Component } from 'react';
import styles from './App.module.css';
import { Dialog, Heading, Game } from './components';
import { createRGBCode, sampleIntLessThan } from './utils';

class App extends Component {
  state = { 
    score: 0,
    answers: [
      { key: 0, color: createRGBCode() },
      { key: 1, color: createRGBCode() },
      { key: 2, color: createRGBCode() }
    ],
    selectedIndex: null,
    correctAnswerIndex: sampleIntLessThan(3)
  }

  selectAnswer = (event) => {
    const { correctAnswerIndex } = this.state;
    const { name } = event.target;

    if (Number(name) === correctAnswerIndex) {
      this.setState(state => ({
        score: state.score + 1,
        selectedIndex: Number(name)
      }));
    } else {
      this.setState({ selectedIndex: Number(name) });
    }

    this.setState({
      selectedIndex: Number(name)
    });
  };

  setNextStage = () => {
    this.setState({
      answers: [
        { key: 0, color: createRGBCode() },
        { key: 1, color: createRGBCode() },
        { key: 2, color: createRGBCode() }
      ],
      selectedIndex: null,
      correctAnswerIndex: sampleIntLessThan(3)
    })
  }

  setInitialStage = () => {
    this.setState({
      answers: [
        { key: 0, color: createRGBCode() },
        { key: 1, color: createRGBCode() },
        { key: 2, color: createRGBCode() }
      ],
      selectedIndex: null,
      correctAnswerIndex: sampleIntLessThan(3),
      score: 0,
    })
  }

  render() {
    const { 
      answers,
      correctAnswerIndex,
      selectedIndex,
      score,
     } = this.state;
    
    return (
      <div className={styles.wrapper}>
        <Heading />
        <Game
          answers={answers}
          correctAnswerIndex={correctAnswerIndex}
          score={score}
          selectAnswer={this.selectAnswer}
          selectedIndex={selectedIndex}
        />
        {selectedIndex !== null && (
          <Dialog
            score={score}
            correctAnswerIndex={correctAnswerIndex}
            selectedIndex={selectedIndex}
            setInitialStage={this.setInitialStage}
            setNextStage={this.setNextStage}
          />)
        }
      </div>
    );
  }
}

export default App;
