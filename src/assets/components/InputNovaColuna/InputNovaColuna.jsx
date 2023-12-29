import React from 'react';
import styles from './InputNovaColuna.module.css';
import { TextField } from '@mui/material';
import { color } from 'framer-motion';

function InputNovaColuna(props) {
  return (
    <input className={styles.input__coluna} onSubmit={props.onSubmit}  onChange={props.onChange} value={props.value} autoComplete='none'  />
  );
}

export default InputNovaColuna;
