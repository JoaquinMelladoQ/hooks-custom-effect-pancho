import { useState } from 'react';

export const useCounter = () => {
  const [valor, setValor] = useState(0); 

  const aumentarFn = () => {
    setValor(valor + 1)
  };

  const disminuirFn = () => {
    setValor(valor - 1)
  };
  return {
    valor, 
    aumentarFn,
    disminuirFn
  }
}
