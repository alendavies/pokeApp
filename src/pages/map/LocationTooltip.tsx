import { Link } from 'react-router-dom'
import { Ubicacion } from './ubicaciones'

interface LocationTooltipProps {
    tooltipInfo: Ubicacion | null
    handleMouseLeave: () => void
}

function LocationTooltip({ tooltipInfo, handleMouseLeave }: LocationTooltipProps) {
    return (
        tooltipInfo && (
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
        )
    )
}

export default LocationTooltip
