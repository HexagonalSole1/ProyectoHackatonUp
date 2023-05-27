import React from 'react'
import BarraNavegadora from '../components/BarraNavegadora'
import Chat from '../components/Chat'	
import Reproductor from "../components/Reproductor"
import '../css/PaginaPrincipal.css'

function PaginaPrincipal() {
  return (
    <div className='PaginaPrincipalContainer'>
        <BarraNavegadora/>
        <Reproductor/>
        <Chat/>

    </div>
  )
}

export default PaginaPrincipal