import React from 'react';
import styles from './Layout.module.css';
import GrupoTarefas from '../GrupoTarefas/GrupoTarefas';
import Header from '../Header/Header';

function Layout() {
  return (
    <div className={styles.layout} >
      <Header/>
      <GrupoTarefas nome="Teste" />
    </div>
  );
}

export default Layout;
