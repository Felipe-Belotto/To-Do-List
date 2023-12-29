import React from 'react';
import styles from './InputNovaTarefa.module.css';


function InputNovaTarefa(props) {
  return (
    <input className={styles.input__tarefa} placeholder='Nova tarefa' onSubmit={props.onSubmit}  onChange={props.onChange} value={props.value} autoComplete='none'  />
  );
}

export default InputNovaTarefa;
