import React from 'react';
import styles from './InputStyle.module.css';
import { TextField } from '@mui/material';
import { color } from 'framer-motion';

function InputStyle(props) {
  return (
    <TextField id={props.titulo} label={props.titulo} variant="standard" onChange={props.onChange} value={props.value}
    InputLabelProps={{style: { color:"white"}}} 
    inputProps={{style: { color:"white" }}}  />
  );
}

export default InputStyle;
