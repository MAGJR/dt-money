import { FormEvent, useState, useContext } from 'react'
import { api } from '../../Services/api'
import { TransactionsContext } from '../../TransactionsContext'
import {Container, TransactionTypeContainer, RadioBox} from './styles'

import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'


interface NewTransactionModal{
  isOpen: boolean;
  onRequestClose: () => void;
}



export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModal){
  const transactions = useContext(TransactionsContext)
  const [ title, setTitle ] = useState('');
  const [ amount, setAmount ] =useState(0);
  const [ category, setCategory ] = useState('');
  const [ type, setType] =useState('deposit')

function handleCreateNewTransaction(event: FormEvent){
event.preventDefault();
}

  return(
    
    
     <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
     >
       <button 
       type="button" 
       onClick={onRequestClose}
       className="react-modal-close"
       >
         <img src={closeImg} alt="fechar modal"/>
       </button>

     <Container onSubmit={handleCreateNewTransaction}>
     <h2> Cadastrar Transações</h2>

     <input 
     placeholder="titulo"
     value={title}
     onChange={event => setTitle(event.target.value)} 
     />

     <input 
     type="number" 
     placeholder="valor"
     value={amount}
     onChange={event => setAmount(Number(event.target.value))}
     />
    
     <TransactionTypeContainer>

     <RadioBox 
     type="button" 
     onClick={()=> 
     setType('deposit')}
     isActive={type == 'deposit'}
     activeColor="green"
     >
     <img src={incomeImg} alt="Entrada" 
     /><span>Entrada</span>
    </RadioBox>

     <RadioBox 
     type="button" 
     onClick={()=> setType('withdraw')}
     isActive={type == 'withdraw'}
     activeColor="red"
     >
      <img src={outcomeImg} alt="Saida" />
      <span>Saida</span>
     </RadioBox>
     
     </TransactionTypeContainer>

     <input  
     placeholder="categoria" 
     value={category}
     onChange={event => setCategory(event.target.value)}
     />

     <button type="submit">
       Cadastrar
     </button>

     
     </Container>
     </Modal>
     
  )
}