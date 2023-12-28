import React, { useState, useEffect } from 'react';
import styles from './Layout.module.css';
import { Reorder } from 'framer-motion';
import Coluna from '../Coluna/Coluna';
import InputStyle from '../InputStyle/InputStyle';
import { Button, IconButton } from '@mui/material';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';

function Layout() {
  const [colunas, setColunas] = useState(['Tarefas']);
  const [novaColuna, setNovaColuna] = useState();
  const [reorderAxis, setReorderAxis] = useState('x');
  const [maxColunas, setMaxColunas] = useState();

  useEffect(() => {

    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setReorderAxis(isMobile ? 'y' : 'x');
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const largura = window.innerWidth;

      if(largura > 768) {
        const maximoColunas = Math.floor(largura / 300); 
        setMaxColunas(maximoColunas);
      } else {
        setMaxColunas(5)
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function adicionarNovaColuna() {
    if (novaColuna.trim() === "") {
      alert("Preencha o nome da coluna");
      return;
    }
  
    if (maxColunas > colunas.length) {
      if (colunas.includes(novaColuna)) {
        alert('Já existe uma coluna com o mesmo nome');
      } else {
        const colunasAntigas = [...colunas];
        colunasAntigas.push(novaColuna);
        setColunas(colunasAntigas);
      }
    } else {
      alert('Número máximo de colunas atingido');
    }
  }
  

  return (
    <section className={styles.container}>

      <div className={styles.header}>
      <h1 className={styles.titulo}>To Do List</h1>

      <div style={{ display: 'flex', alignItems: 'end' }}>
  <InputStyle titulo="Nova Coluna" value={novaColuna} onChange={(e) => setNovaColuna(e.target.value)} />
  <IconButton aria-label="add to shopping cart" onClick={adicionarNovaColuna}>
    <AddCircleSharpIcon style={{ color: 'ghostwhite' }} />
  </IconButton>
      </div>

        </div>

      <Reorder.Group
        axis={reorderAxis}
        values={colunas}
        onReorder={setColunas}
        style={{
          display: 'flex',
          listStyle: 'none',
          flexDirection: reorderAxis === 'y' ? 'column' : 'row',
          justifyContent: reorderAxis === 'y' ? 'center' : 'start',
          padding:" 0 2%"
        }}
      >
        {colunas.map((item) => (
          <Coluna key={item} item={item} />
        ))}
      </Reorder.Group>
    </section>
  );
}

export default Layout;
