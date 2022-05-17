import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./Services/api";

export const TransactionsContext = createContext<Transactions[]>([])


interface Transactions{
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createdAt: string,
}

interface TransactionsProviderProps{
  children: ReactNode;
}

type TransactionsInput = Omit<Transactions, 'id' | 'createdAt' >

interface TransactionsContextData{
  Transactions: Transactions[];
  createTransactions: (Transactions: TransactionsInput) => void; 
}

export function TransactionsProvider({children}:TransactionsProviderProps){
  
const [ transactions , setTransactions ] = useState<TransactionsContextData>(
  {} as TransactionsContextData 
);


useEffect(()=>{
  api.get('/transactions')
  .then(response=> setTransactions(response.data.transactions))
},[]);

function createTransactions(transactions: TransactionsInput) {
     api.post('/transactions', transactions)
  }


return(
<TransactionsContext.Provider value={{ transactions , createTransactions}}>
  {children}
</TransactionsContext.Provider>
);
}
  
 