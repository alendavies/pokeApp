import { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Skeleton } from './ui/skeleton'
import { Pokemon } from 'pokenode-ts'
import { pokemonClient } from '@/lib/pokeapi'
import { PokemonType } from './pokemonType'

export const PokemonCard = ({ nameOrId }: { nameOrId: string | number }) => {
    const [pokemon, setPokemon] = useState<Pokemon>()
    const [cargando, setCargando] = useState<boolean>(true)
    const [imageCargando, setImageCargando] = useState<boolean>(false)

    useEffect(() => {
        if (typeof nameOrId === 'number') {
            pokemonClient.getPokemonById(nameOrId).then(p => {
                setPokemon(p)
                setImageCargando(true)
                setCargando(false)
            })
        } else {
            pokemonClient.getPokemonByName(nameOrId).then(p => {
                setPokemon(p)
                setImageCargando(true)
                setCargando(false)
            })
        }
    }, [nameOrId])

    return (
        <>
            {cargando ? (
                <div className='rounded border-2 shadow-2xl'>
                    <Skeleton className='w-full md:h-[300px] 2xl:h-[385px]' />
                </div>
            ) : pokemon ? (
                <div className='hover:cursor-pointer rounded-lg border-2 shadow-2xl hover:shadow-lg hover:scale-105 hover:duration-150 border-none'>
                    <div className='space-y-2'>
                        <div className='bg-[#f2f2f2] w-full rounded-lg flex justify-center md:h-[220px] 2xl:h-[295px] items-center'>
                            <img
                                src={pokemon.sprites.other?.['official-artwork'].front_default || ''}
                                onLoad={() => setImageCargando(false)}
                            />

                            {imageCargando && (
                                <div className='w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin' />
                            )}
                        </div>
                        <div className='h-1/4 space-y-2'>
                            <div className='text-2xl'>
                                <p className='text-center'>
                                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                </p>
                            </div>
                            <div className='space-x-2 text-center pb-3'>
                                {pokemon.types.map(type => (
                                    <Badge size='medium' type={type.type.name as PokemonType}>
                                        {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>error</>
            )}
        </>
    )
}
