import logo from './logo.svg';
import './App.css';
import { useCounter } from './hooks/useCounter';
import { useScreen } from './hooks/useScreen';
import { useState, useEffect } from 'react';
import { getPost } from './service/postService';

const App = () => {

  const { valor, aumentarFn, disminuirFn } = useCounter();
  const { screenActive, closeFn, openFn } = useScreen();
  const [text, setText] = useState('');

  const loadPost = () => {
    getPost()
        .then(({ data }) => {
          setText(data)
        })
      console.log('effect: ', text)
  }

  useEffect(() => {
    loadPost()
    return () => {
      console.log('cleanup')
    }
  }, [])



  return (
    <>
      {/* OTRO UI */}
      {
        screenActive === 'active' ? (
        <div>
          <div>
            {text.map((body, index) => (
              <div key={index}>
                {body.title}
              </div>
            ))}
          </div>
          <button onClick={closeFn}>
            Cerrar Screen
          </button>
        </div>
        ) : (
        <div>
          <div>
            {valor}
          </div>
          <button onClick={aumentarFn}>
            Agregar
          </button>
          <button onClick={disminuirFn}>
            Disminuir
          </button>
          <button onClick={openFn}>
            Abrir Modal
          </button>
        </div>
        )
      }
    </>
  )
}

export default App;
