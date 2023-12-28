import React, { useState } from 'react';
import styles from './Tarefa.module.css';
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

function Tarefa(props) {

  const[status, setStatus] = useState(false)

  return (
    <div className={styles.tarefa} 
    style={{backgroundColor: status ? "rgba(24, 24, 24, 0.316)" : "rgba(207, 207, 207, 0.316)", 
    textDecoration:status ? "line-through": "none",

    }}>

    <IconButton className={styles.botao} aria-label="done" size="small" onClick={()=>{setStatus(!status)}}>
    <DoneIcon fontSize="small" />
    </IconButton>
    <p>Fazer a To-Do-List</p>
    <IconButton className={styles.botao} aria-label="delete" size="small">
    <DeleteIcon fontSize="small" />
    </IconButton>
    </div>
  );
}

export default Tarefa;