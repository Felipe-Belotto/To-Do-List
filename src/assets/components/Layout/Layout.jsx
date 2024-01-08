import React, { useState, useEffect } from 'react';
import styles from './Layout.module.css';
import { Reorder } from 'framer-motion';
import Coluna from '../Coluna/Coluna';
import InputNovaColuna from '../InputNovaColuna/InputNovaColuna';
import { Button, IconButton } from '@mui/material';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import AddIcon from '@mui/icons-material/Add';

function Layout() {
  const [colunas, setColunas] = useState(['Tarefas']);
  const [novaColuna, setNovaColuna] = useState();
  const [reorderAxis, setReorderAxis] = useState('x');
  const [maxColunas, setMaxColunas] = useState(); 
  const [novaColunaDisplay, setNovaColunaDisplay] = useState(false); 

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

    function deletarColuna(nome) {
      const novaListaColunas = colunas.filter((coluna) => coluna !== nome);
      setColunas(novaListaColunas);
    }
  
    if (maxColunas > colunas.length) {
      if (colunas.includes(novaColuna)) {
        alert('Já existe uma coluna com o mesmo nome');
      } else {
        const colunasAntigas = [...colunas];
        colunasAntigas.push(novaColuna);
        setColunas(colunasAntigas);
        setNovaColunaDisplay(!novaColunaDisplay)
        setNovaColuna("")
      }
    } else {
      alert('Número máximo de colunas atingido');
    }
  }
  

  return (
    <section className={styles.container}>

      <div className={styles.header}>
        
      <h1 className={styles.titulo}>To Do List</h1>
      
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
          padding:" 2%",
        }}
      >
        {colunas.map((item) => (
          <Coluna key={item} item={item} onDeletarColuna={() => deletarColuna(item)} />
        ))}

 <section  style={{display: maxColunas > colunas.length ? "flex": "none", justifyContent:"center", alignItems:"center"}}> 

    <Button color='inherit' sx={{width:"100%", height:"100%", minHeight:"150px", display: novaColunaDisplay ? "none" : "flex"}} onClick={() => setNovaColunaDisplay(!novaColunaDisplay)}>
    <AddCircleSharpIcon fontSize='large'sx={{color:"#1a1a1a83"}} />
    </Button>

  <div className={styles.nova__coluna} style={{display: novaColunaDisplay ? "flex" : "none"}}>
  <h3>Nova coluna</h3>
      
  <div style={{display:"flex", alignItems:"center"}}>

   <InputNovaColuna titulo="Nova Coluna" value={novaColuna} onSubmit={adicionarNovaColuna} onChange={(e) => setNovaColuna(e.target.value)} />

    <Button color="inherit" onClick={adicionarNovaColuna} style={{display: "flex", height:"40px", backgroundColor:"#51515147", border:"none", borderRadius:"0 12px 12px 0", alignItems:"center"}}>
    <AddCircleSharpIcon style={{ color: 'rgba(245, 245, 245, 0.703)'}} />
    </Button>
    </div>
   </div>
    
    </section>

      </Reorder.Group>
     
    </section>
  );
}

export default Layout;
