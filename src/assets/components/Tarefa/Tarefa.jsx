  import React, { useEffect, useState } from 'react';
  import styles from './Tarefa.module.css';
  import { Button, IconButton } from '@mui/material';
  import DeleteIcon from '@mui/icons-material/Delete';
  import DoneIcon from '@mui/icons-material/Done';

  function Tarefa(props) {

    return (
      <div className={styles.tarefa} 
      style={{backgroundColor: props.status ? "rgba(24, 24, 24, 0.316)" : "rgba(207, 207, 207, 0.316)", 
      textDecoration: props.status ? "line-through": "none",

      }}>

      <IconButton className={styles.botao} aria-label="done" size="small" onClick={props.onAlterarStatus}>
      <DoneIcon fontSize="small" />
      </IconButton>
      <p>{props.nome}</p>
      
      <IconButton className={styles.botao} aria-label="delete" size="small" onClick={props.onDelete}>
      <DeleteIcon fontSize="small"  />
      </IconButton>
      </div>
    );
  }

  export default Tarefa;
