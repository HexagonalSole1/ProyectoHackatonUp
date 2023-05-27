import React from 'react'
import '../css/Chat.css'

function Chat() {
  return (
    <>
      <div className='ChatContainer'>
        <div className='SesionContainer'>
            <button className='ChatSesion'>
              Iniciar sesion
            </button>
        </div>
        <div className='ChatFondo'>
          <ul className='ChatComentarioIn'>
            <li className='Comentario1'>
            </li>
            <li className='Comentario2'>
            </li>
            <li className='Comentario3'>
            </li>
            <li className='Comentario4'>
            </li>
            <li className='Comentario5'>
            </li>
          </ul>
        </div>
        <input className='ChatComentario'>
        </input>
      </div>
    </>
  )
}

export default Chat