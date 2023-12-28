import React from 'react';
import styles from './InputStyle.module.css';
import { TextField } from '@mui/material';
import { color } from 'framer-motion';

function InputStyle(props) {
  return (
    <input id={props.titulo} label={props.titulo} variant="standard" onSubmit={props.onSubmit}  onChange={props.onChange} value={props.value} autoComplete='none' />
  );
}

export default InputStyle;
