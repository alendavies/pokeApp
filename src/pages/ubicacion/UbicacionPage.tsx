import { locationClient } from '@/lib/pokeapi'
import { LocationArea } from 'pokenode-ts'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ubicaciones, Ubicacion } from '../map/ubicaciones'
import ToggleStats from './ToggleStats'
import ChoosePokemon from './ChoosePokemon'

export const UbicacionPage = () => {
    const { location } = useParams()
    const [locationArea, setLocationArea] = useState<LocationArea>()
    const [ubicacion, setUbicacion] = useState<Ubicacion>()
    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {
        location && locationClient.getLocationAreaByName(location).then(res => setLocationArea(res))
        const ubicacion = ubicaciones.find(u => u.real_pokemon_location === location)
        ubicacion && setUbicacion(ubicacion)
    }, [location])

    return (
        <div
            className='bg-origin-border bg-top bg-cover bg-no-repeat min-w-screen min-h-screen bg-opacity-25 flex flex-col items-center'
            style={{
                backgroundImage: `url('${ubicacion?.image}')`
            }}
        >
            <p className='text-3xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] pt-2'>
                {ubicacion?.name}
            </p>
            <div className='grid grid-cols-12'>
                {locationArea?.pokemon_encounters.map(p => {
                    return (
                        <div className='space-y-2 col-span-3 p-4'>
                            <ToggleStats name={p.pokemon.name} setOpen={setOpen}/>
                        </div>
                    )
                })}
            </div>
            <ChoosePokemon open={open} setOpen={setOpen}/>
        </div>
    )
}

export default UbicacionPage
