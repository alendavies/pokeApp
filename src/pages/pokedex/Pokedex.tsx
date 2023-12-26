import { Link } from 'react-router-dom'
import { PokemonCard } from '@/components/PokemonCard'


interface PokedexProps {
    fromChoose?: boolean
}
export const Pokedex = ({ fromChoose = false }: PokedexProps) => {
    return (
        !fromChoose ?
            <div className='grid grid-cols-12 gap-6'>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
                    const randomId = Math.floor(Math.random() * 1000)
    
                    return (
                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3'>
                            <Link to={`${randomId}`}>
                                <PokemonCard nameOrId={randomId} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        :
            <div className='grid grid-cols-12 gap-6'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                    const randomId = Math.floor(Math.random() * 1000)

                    return (
                        <div className='sm:col-span-12 md:col-span-6 lg:col-span-4 border-2 rounded-md border-green'>
                            <PokemonCard nameOrId={randomId}/>
                        </div>
                    )
                })}
            </div>
    )
}
