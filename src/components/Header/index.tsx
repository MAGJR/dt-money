import Logo from '../../assets/logo.svg'
import { useState } from 'react'
import { Container, Content } from './styles'
import Modal from 'react-modal';

interface HeaderProps{
  onOpenNewTransactionModal: () => void;
}
export function Header({ onOpenNewTransactionModal }: HeaderProps){
 
  return(
    <Container>
      <Content>
      <img src={Logo} alt="Logo da dtmoney"/>
      <button type="button" 
      onClick={ onOpenNewTransactionModal }
      > Nova transação
        </button>

       
        
        </Content>

    </Container>
  )
}