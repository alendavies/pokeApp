import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pokemonClient } from '@/lib/pokeapi'
import { FlavorText, Genus, NamedAPIResource, Pokemon, TypeRelations } from 'pokenode-ts'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { PokemonType } from '@/components/pokemonType'

export const PokemonPage = () => {
    const { name } = useParams()

    const [pokemon, setPokemon] = useState<Pokemon>()
    const [cargando, setCargando] = useState<boolean>(false)
    const [descripcion, setDescripcion] = useState<FlavorText>()
    const [categoria, setCategoria] = useState<Genus>()
    const [debilidadesYFortalezas, setDebilidadesYFortalezas] = useState<TypeRelations[]>()
    const [debilidades, setDebilidades] = useState<NamedAPIResource[]>()
    const [fortalezas, setFortalezas] = useState<NamedAPIResource[]>()
    const cargarDatos = () => {
        if (name) {
            setCargando(true)
            pokemonClient
                .getPokemonByName(name)
                .then(data => {
                    setPokemon(data)
                    pokemonClient.getPokemonSpeciesByName(data.name).then(res => {
                        setDescripcion(res.flavor_text_entries.find(entry => entry.language.name === 'en'))
                        setCategoria(res.genera.find(cat => cat.language.name === 'en'))
                    })

                    let tempTypes: TypeRelations[] = []
                    data.types.map(pokemon => {
                        pokemonClient.getTypeByName(pokemon.type.name).then(res => {
                            tempTypes = [...tempTypes, res.damage_relations]
                            setDebilidadesYFortalezas(tempTypes)
                        })
                    })
                })
                .catch(error => console.error(error))
                .finally(() => setCargando(false))
        }
    }
    useEffect(() => {
        cargarDatos()
    }, [name])

    const eliminarDuplicadas = (damages: NamedAPIResource[]) => {
        const uniqueArray = damages.filter((value, index, self) => self.findIndex(v => v.name === value.name) === index)
        return uniqueArray
    }

    const setearProsYCons = (array: TypeRelations[]) => {
        const allDoubleDamageFrom: NamedAPIResource[] = array.flatMap(pokemon => pokemon.double_damage_from)
        const uniqueDoubleDamageFrom = eliminarDuplicadas(allDoubleDamageFrom)
        setDebilidades(uniqueDoubleDamageFrom)
        const allDoubleDamageTo: NamedAPIResource[] = array.flatMap(pokemon => pokemon.double_damage_to)
        const uniqueDoubleDamageTo = eliminarDuplicadas(allDoubleDamageTo)
        setFortalezas(uniqueDoubleDamageTo)
    }

    useEffect(() => {
        debilidadesYFortalezas && debilidadesYFortalezas.length !== 0 && setearProsYCons(debilidadesYFortalezas)
    }, [debilidadesYFortalezas])

    return (
        <div className='h-full'>
            {cargando || !pokemon || !descripcion || !debilidadesYFortalezas || !categoria ? (
                <>
                    <div className='mb-10 2xl:mt-10'>
                        <div className='flex justify-center'>
                            <Skeleton className='md:w-[120px] h-[40px] 2xl:w-[160px]' />
                        </div>
                        <div className='flex flex-row items-center justify-center h-full pt-6'>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='pr-2'>
                                    <div className='rounded-lg'>
                                        <Skeleton className='md:w-[410px] md:h-[450px] 2xl:w-[590px] 2xl:h-[465px]' />
                                    </div>
                                    <div className='bg-[#dbdbdb] p-6 border rounded-md mt-4 flex justify-center space-y-2 flex-col'>
                                        {Array.from({ length: 6 }).map(() => (
                                            <Skeleton className='w-full h-[20px]' />
                                        ))}
                                    </div>
                                </div>
                                <div className='space-y-4'>
                                    <div className='flex justify-center space-y-2 flex-col'>
                                        {Array.from({ length: 3 }).map(() => (
                                            <Skeleton className='w-4/5 h-[15px] ' />
                                        ))}
                                    </div>
                                    <div className='bg-[#dbdbdb] p-6 border rounded-md grid grid-cols-2 gap-4 w-4/5'>
                                        <div className='space-y-3'>
                                            <Skeleton className='w-[70px] h-[18px]' />
                                            <Skeleton className='w-[50px] h-[15px]' />
                                        </div>
                                        <div className='space-y-3'>
                                            <Skeleton className='w-[85px] h-[18px]' />
                                            <Skeleton className='w-[50px] h-[15px]' />
                                        </div>
                                        <div className='space-y-3'>
                                            <Skeleton className='w-[60px] h-[18px]' />
                                            <Skeleton className='w-[50px] h-[15px]' />
                                        </div>
                                        <div className='space-y-3'>
                                            <Skeleton className='w-[85px] h-[18px]' />
                                            <Skeleton className='w-[50px] h-[15px]' />
                                        </div>
                                        <div className='space-y-3'>
                                            <Skeleton className='w-[60px] h-[18px]' />
                                            <Skeleton className='h-8 w-8 rounded-full' />
                                        </div>
                                    </div>

                                    <div className='space-y-3 pt-4'>
                                        <div className='pt-3'>
                                            <Skeleton className='w-[65px] h-[25px]' />
                                            <div className='flex items-center gap-2 pt-2'>
                                                <Skeleton className='h-[22px] w-[90px] rounded-3xl' />
                                                <Skeleton className='h-[22px] w-[90px] rounded-3xl' />
                                            </div>
                                        </div>
                                        <div className='pt-3'>
                                            <Skeleton className='w-[100px] h-[25px]' />
                                            <div className='flex flex-wrap items-center gap-2 pt-2 w-1/2'>
                                                {Array.from({ length: 4 }).map(() => (
                                                    <Skeleton className='h-[22px] w-[80px] rounded-3xl' />
                                                ))}
                                            </div>
                                        </div>
                                        <div className='pt-3'>
                                            <Skeleton className='w-[110px] h-[25px]' />
                                            <div className='flex items-center gap-2 pt-2'>
                                                <Skeleton className='h-[22px] w-[90px] rounded-3xl' />
                                                <Skeleton className='h-[22px] w-[90px] rounded-3xl' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                pokemon &&
                descripcion &&
                debilidadesYFortalezas &&
                categoria && (
                    <>
                        <div className='text-[32px] font-semibold'>
                            <p className='text-center'>
                                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                            </p>
                        </div>
                        <div className='flex flex-row items-center justify-center h-full pt-6'>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='pr-2'>
                                    <div className='bg-[#f2f2f2] rounded-lg flex justify-center'>
                                        <img src={pokemon.sprites.other?.['official-artwork'].front_default || ''} />
                                    </div>
                                    <div className='bg-[#dbdbdb] p-6 border rounded-md mt-4'>
                                        {pokemon.stats.map((stat, idx) => (
                                            <div key={idx} className='grid grid-cols-3'>
                                                <div className='basis-1/4 font-medium text-md whitespace-nowrap col-span-1 self-center'>
                                                    {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}
                                                </div>
                                                <div className='basis-3/4 col-span-2 self-center'>
                                                    <Progress max={200} value={(stat.base_stat / 200) * 100} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div className='w-4/5'>{descripcion.flavor_text.replace('\f', ' ')}</div>
                                    <div className='mt-4 bg-[#359cf0] p-6 border rounded-md grid grid-cols-2 gap-4 w-4/5'>
                                        <div>
                                            <p className='text-white text-lg font-medium'>Altura</p>
                                            <p className={'font-medium'}>{`${(pokemon.height / 10).toFixed(1)} m`}</p>
                                        </div>
                                        <div>
                                            <p className='text-white text-lg font-medium'>Categoria</p>
                                            <p className={'font-medium'}>{categoria.genus.replace('Pokémon', '')}</p>
                                        </div>
                                        <div>
                                            <p className='text-white text-lg font-medium'>Peso</p>
                                            <p className={'font-medium'}>{`${(pokemon.weight / 10).toFixed(1)} kg`}</p>
                                        </div>
                                        <div>
                                            <p className='text-white text-lg font-medium'>Habilidad</p>
                                            <p className={'font-medium'}>
                                                {pokemon.abilities[0].ability.name.charAt(0).toUpperCase() +
                                                    pokemon.abilities[0].ability.name.slice(1)}
                                            </p>
                                        </div>
                                        <div>
                                            <p className='text-white text-lg font-medium'>Sexo</p>
                                            <img
                                                className='h-[40px] w-[40px] pt-2'
                                                src='/images/gender-intersex-thin-svgrepo-com.svg'
                                            />
                                        </div>
                                    </div>
                                    <div className='pt-6'>
                                        <div>
                                            <p className='text-xl font-semibold'>Tipo</p>
                                            <div className='flex flex-wrap w-1/2 pt-4 items-center'>
                                                {pokemon.types.map(type => (
                                                    <Badge
                                                        size='medium'
                                                        type={type.type.name as PokemonType}
                                                        className='mb-2 mr-2'
                                                    >
                                                        {type.type.name.charAt(0).toUpperCase() +
                                                            type.type.name.slice(1)}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div className='pt-4'>
                                            <p className='text-xl font-semibold'>Debilidades</p>
                                            {debilidades && debilidades.length !== 0 ? (
                                                <div className='flex flex-wrap 2xl:w-1/2 md:w-3/4 pt-4 items-center'>
                                                    {debilidades.map(type => (
                                                        <Badge
                                                            size='medium'
                                                            type={type.name as PokemonType}
                                                            className='mb-2 mr-2'
                                                        >
                                                            {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            ) : (
                                                <Alert variant='primary'>
                                                    <AlertTitle>Sin debilidades</AlertTitle>
                                                    <AlertDescription>
                                                        ¡Tu pokémon no tiene ninguna debilidad!
                                                    </AlertDescription>
                                                </Alert>
                                            )}
                                        </div>
                                        <div className='pt-4'>
                                            <p className='text-xl font-semibold'>Fuerte Contra</p>
                                            {fortalezas && fortalezas.length !== 0 ? (
                                                <div className='flex flex-wrap 2xl:w-1/2 md:w-3/4 pt-4 items-center'>
                                                    {fortalezas.map(type => (
                                                        <Badge
                                                            size='medium'
                                                            type={type.name as PokemonType}
                                                            className='mb-2 mr-2'
                                                        >
                                                            {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className='w-2/3 pt-4'>
                                                    <Alert variant='destructive'>
                                                        <AlertTitle>Sin fortalezas</AlertTitle>
                                                        <AlertDescription>
                                                            Ups... tu pokémon no tiene ninguna ventaja
                                                        </AlertDescription>
                                                    </Alert>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            )}
        </div>
    )
}
