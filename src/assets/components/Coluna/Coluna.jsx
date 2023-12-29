import React from 'react';
import styles from './Coluna.module.css';
import { Reorder, useDragControls } from "framer-motion"
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import Tarefa from '../Tarefa/Tarefa';
import InputNovaTarefa from '../InputNovaTarefa/InputNovaTarefa';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import { Button } from '@mui/material';

function Coluna(props) {
  
  const controls = useDragControls()

  return (

    <Reorder.Item key={props.item} value={props.item}  dragListener={false} dragControls={controls}>
     
     <section className={styles.coluna}>
      
      <div className={styles.titulo}>

      <h2>
        {props.item} 
       </h2>

       <div className={styles.handle} onPointerDown={(e) => controls.start(e)}>
        <DragIndicatorIcon style={{ fontSize: '42px' }}/>
       </div>
      </div>

    
    <div className={styles.nova__tarefa}>
    <InputNovaTarefa />
    <Button onClick={()=> {alert("ta funcionando")}} style={{display: "flex", height:"30px", backgroundColor:"#b3b3b347", border:"none", alignItems:"center", borderRadius:"0"}}>
    <AddCircleSharpIcon style={{ color: 'darkgray', fontSize:"20px"}} />
    </Button>
    </div>

 


    </section>
    
  </Reorder.Item>

   
  );
}

export default Coluna;
