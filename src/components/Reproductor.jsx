import '../css/Reproductor.css'
import ScrollBar from './ScrollBar'

function Reproductor() {
    return (
        <div className='ReproductorContainer'>
            <div className='DivLetra'>
                <p className='Letra'>dksksd</p>
                <div className = "scrollBar">
                <ScrollBar/>
                </div>
            </div>
          <div className='DivBarraNavegacion'>
            <button className='BotonAmarillo'> </button>
            <button className='BotonNaranja'> </button>
            <button className='BotonRojo'> </button>
            <button className='BotonNaranja'> </button>
            <button className='BotonAmarillo'>  </button>

          </div>


        </div>
    )
}

export default Reproductor