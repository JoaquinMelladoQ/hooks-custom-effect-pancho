import { useState } from 'react';

export const useScreen = () => {
  const [screenActive, setScreenActive] = useState('')

    const openFn = () => {
      setScreenActive('active')
    };

    const closeFn = () => {
      setScreenActive('')
    }

  return {
    screenActive,
    openFn,
    closeFn
  }
}

