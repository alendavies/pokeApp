import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Ubicacion, ubicaciones } from './ubicaciones'

export const Map = () => {
    const [tooltipInfo, setTooltipInfo] = useState<Ubicacion | null>(null)

    const handleMouseEnter = (ubicacion: Ubicacion) => {
        // Mostrar el tooltip al pasar el cursor
        setTooltipInfo(ubicacion)
    }

    const handleMouseLeave = () => {
        // Ocultar el tooltip al salir del pin
        setTooltipInfo(null)
    }

    return (
        <div
            className='relative flex flex-col items-center justify-center'
            style={{
                height: '80vh',
                backgroundImage: `url(${'/map.jpeg'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {ubicaciones.map(ubicacion => (
                <div
                    className='flex w-[40px] h-[47px] bg-transparent border-none outline-none shadow-2xl hover:cursor-pointer hover:scale-125 hover:duration-150'
                    style={{ top: ubicacion.top, left: ubicacion.left, cursor: 'pointer', position: 'absolute' }}
                    onMouseEnter={() => handleMouseEnter(ubicacion)}
                >
                    <img src={'/pin_ubicacion.png'} className='w-full h-full' />
                </div>
            ))}
            {tooltipInfo && (
                <div
                    className='absolute bg-stone-600 rounded-md w-60 h-40 shadow-2xl border-solid'
                    style={{ top: `calc(${tooltipInfo.top} - 110px)`, left: `calc(${tooltipInfo.left} + 60px)` }}
                    onMouseLeave={handleMouseLeave}
                >
                    <h3 className='text-lg font-bold text-stone-300 flex justify-center'>{tooltipInfo.name}</h3>
                    <div className='relative'>
                        <img src={tooltipInfo.image} className='w-full rounded-md h-auto' />
                        <div className='absolute top-1/2 transform -translate-y-1/2 text-white pl-2 pr-2'>
                            <p
                                className='text-center font-semibold white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'
                                style={{ textShadow: '2px 2px 4px black' }}
                            >
                                {tooltipInfo.description}
                            </p>
                        </div>
                    </div>
                    <Link to={`/combate/${tooltipInfo.real_pokemon_location}`}>
                        <div className='w-full bg-white text-center border rounded-md hover:shadow-lg hover:duration-150 hover:bg-[#ebebeb]'>
                            <p className='text-lg font-medium'>Viajar</p>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    )
}
