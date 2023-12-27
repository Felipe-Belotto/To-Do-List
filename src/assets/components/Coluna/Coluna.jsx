import React from 'react';
import styles from './Coluna.module.css';
import { Reorder, useDragControls } from "framer-motion"
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

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
        <DragIndicatorIcon style={{ fontSize: '32px' }}/>
       </div>
      </div>

    </section>
    
  </Reorder.Item>

   
  );
}

export default Coluna;
