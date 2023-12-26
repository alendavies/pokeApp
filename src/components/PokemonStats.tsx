import { pokemonClient } from '@/lib/pokeapi'
import { Pokemon } from 'pokenode-ts'
import { useEffect, useState } from 'react'

const PokemonStats = ({ name }: { name: string }) => {
    const [pokemon, setPokemon] = useState<Pokemon>()

    useEffect(() => {
        pokemonClient.getPokemonByName(name).then(p => {
            setPokemon(p)
        })
    }, [name])
    return (    
        <div className='bg-[#dbdbdb] py-4 px-6 border-none rounded-md cursor-pointer'>
            {pokemon && (
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-center text-xl'>
                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                    </div>
                    <img
                        className='md: w-[110px] md: h-[110px] 2xl: w-[180px] 2xl: h-[180px]'
                        src={pokemon.sprites.other?.['official-artwork'].front_default || ''}
                    />
                </div>
            )}
            {pokemon &&
                pokemon.stats.map((stat, idx) => (
                    <div key={idx} className='grid grid-cols-3 w-full rounded-lg '>
                        <div className='basis-1/4 font-medium text-sm whitespace-nowrap col-span-2 justify-self-start'>
                            {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}
                        </div>
                        <div className='basis-3/4 col-span-1 justify-self-end'>
                            {Math.ceil((stat.base_stat / 200) * 100)}
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default PokemonStats
