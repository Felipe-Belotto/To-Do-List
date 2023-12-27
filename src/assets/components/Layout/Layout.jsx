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
  const [reorderAxis, setReorderAxis] = useState('x'); // Defina a orientação padrão como 'x'

  useEffect(() => {
    // Verifica o tamanho da tela e define a orientação do Reorder.Group
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

  function adicionarNovaColuna() {
    const colunasAntigas = [...colunas];
    colunasAntigas.push(novaColuna);
    setColunas(colunasAntigas);
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>To Do List</h1>

      <div style={{ display: 'flex', alignItems: 'end' }}>
        <InputStyle titulo="Nova Coluna" value={novaColuna} onChange={(e) => setNovaColuna(e.target.value)} />
        <IconButton aria-label="add to shopping cart" onClick={adicionarNovaColuna}>
          <AddCircleSharpIcon style={{ color: 'ghostwhite' }} />
        </IconButton>
      </div>

      <Reorder.Group
  as="div"
  axis={reorderAxis}
  values={colunas}
  onReorder={setColunas}
  style={{
    display: 'flex',
    width: '100%',
    gap: '16px',
    listStyle: 'none',
    flexWrap: 'wrap',
    justifyContent: reorderAxis === 'y' ? 'center' : 'flex-start', 
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
