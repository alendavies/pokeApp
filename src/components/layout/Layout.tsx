import { Info } from 'lucide-react'
import NavItem from './NavItem'
import { ReactNode, useEffect, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

const navItems = [
    {
        name: 'Pokédex',
        icon: '/images/closed-pokedex.svg',
        iconOpen: '/images/open-pokedex.svg',
        link: '/pokedex'
    },
    {
        name: 'Map',
        icon: '/images/map-open.svg',
        iconOpen: '/images/map-closed.svg',
        link: '/map'
    }
] as const

function Layout({ children }: { children: ReactNode }) {
    const [content, setContent] = useState('')

    const getContent = () => {
        if (window.location.toString().includes('/map')) {
            return 'Este es el mapa del mundo Pokémon. Aquí podrás ver los pokémones que se encuentran en cada ubicación. Presiona sobre alguna de estas para verlos!'
        } else if (window.location.toString().includes('/pokedex')) {
            return 'Esta es tu pokédex! Aquí podrás ver todos los pokémones que has capturado. Presiona sobre uno de ellos para ver sus estadísticas.'
        } else if (window.location.toString().includes('/combate')) {
            return '¡Bienvenido al combate Pokémon! Aquí podrás enfrentarte a otros pokemones. ¡Que gane el mejor!'
        } else {
            return '¡Bienvenido a la PokéApp!'
        }
    }
    useEffect(() => {
        setContent(getContent())
    }, [])

    return (
        <div>
            <div className='flex items-center justify-between'>
                <nav>
                    <div className='space-x-16 flex justify-start items-center'>
                        {navItems.map((item, index) => (
                            <NavItem
                                key={index}
                                name={item.name}
                                icon={item.icon}
                                link={item.link}
                                iconOpen={item.iconOpen}
                            />
                        ))}
                    </div>
                </nav>
                <Popover>
                    <PopoverTrigger>
                        <Info
                            height={'50px'}
                            width={'50px'}
                            className='hover:scale-110 duration-300 transform transition-transform rounded-full bg-yellow-400 text-blue-600'
                        />
                    </PopoverTrigger>
                    <PopoverContent className='bg-[#f2f2f2]'>
                        <p>{content}</p>
                    </PopoverContent>
                </Popover>
            </div>
            <div className='mt-8'>{children}</div>
        </div>
    )
}

export default Layout
