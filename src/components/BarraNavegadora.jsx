import CardCancion from './Cancion'
import '../css/BarraNavegadora.css'

function BarraNavegadora() {
    return (
        <div className='BarraNavegadoraContainer'>
            <div className='DivBuscador'>
                <input type="text" className='Buscador' />
            </div>
            <div className='DivMusica'>
            <CardCancion
                nombre = "Rextro"
                autor = "RexTheRex"
                className = "reproducir"
            />
            <CardCancion
                nombre = "Waos"
                autor = "Cheems"
                className = "reproducir"
            />
            </div>
            <div className='DivLista'>

            </div>
        </div>
    )
}

export default BarraNavegadora