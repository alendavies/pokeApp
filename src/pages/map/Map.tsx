import { useState } from 'react'
import { Ubicacion, ubicaciones } from './ubicaciones'
import LocationTooltip from './LocationTooltip'

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
            <LocationTooltip tooltipInfo={tooltipInfo} handleMouseLeave={handleMouseLeave} />
        </div>
    )
}
