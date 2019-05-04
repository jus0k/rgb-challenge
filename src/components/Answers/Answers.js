import React from 'react';
import classnames from 'classnames/bind';
import styles from './Answers.module.css';

const cx = classnames.bind(styles);

const Answers = ({ answers, selectAnswer, selectedIndex }) => (
  <ul className={styles.answers}>
    {answers.map(answer => (
      <li 
        key={answer.key}
        className={cx('answer', { selected: selectedIndex === answer.key })}
        style={{ backgroundColor: answer.color}}
      >
        <button 
          type='button'
          name={answer.key}
          className={cx('button', { selected: selectedIndex === answer.key })}
          onClick={selectAnswer}
        />
      </li>
    ))}
  </ul>
)

export default Answers;