import styled from 'styled-components'
import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root')

export function App() {
  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false)

  function handleOpenTransactionModal(){
    setIsNewTransactionModalOpen(true)
  }
  
  function handleCloseTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }


  return (
   <>
      <Header onOpenNewTransactionModal={handleOpenTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen} 
      onRequestClose={handleCloseTransactionModal}
      />
      <GlobalStyle/>
   </>
  );
}


