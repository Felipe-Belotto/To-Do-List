import React from 'react';
import styles from './InputNovaColuna.module.css';

function InputNovaColuna(props) {
  return (
    <input className={styles.input__coluna} onSubmit={props.onSubmit}  onChange={props.onChange} value={props.value} autoComplete='none'  />
  );
}

export default InputNovaColuna;
