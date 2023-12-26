import { Info } from 'lucide-react'
import NavItem from './NavItem'
import {ReactNode, useState} from "react";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";

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


interface LayoutProps {
    children: ReactNode
}

function Layout({children}: LayoutProps) {
    const [open, setOpen] = useState<boolean>(false)
    
    const getTitle = () => {
        if (window.location.toString().includes('/map')) return 'Instrucciones del mapa'
        else if (window.location.toString().includes('/pokedex')) return 'Instrucciones de la pokédex'
        else if (window.location.toString().includes('/combate')) return 'Instrucciones del combate'
        else return '¿De qué trata Mundo Pokémon?'
    }
    
    const getContent = () => {
        if (window.location.toString().includes('/map')) return 'Presionando sobre cada ubicación podrás ver su información y viajar hacia ella para enfrentar pokémones.'
        else if (window.location.toString().includes('/pokedex')) return 'En la pokédex vas a encontrar tus pokémones y ver sus tipos. Clickeando sobre ellos vas a poder ver información y estadísticas de cada uno'
        else if (window.location.toString().includes('/combate')) return '¡En esta sección debes seleccionar que pokémon atacar! Clickea sobre uno de ellos o el botón "Ver" para visualizar sus estadísticas, luego presiona "Atacar" y selecciona tu pokémon para combatirlo!'
        else return '¡Bienvenido a Mundo Pokémon! Estás por empezar una apasionante aventura, llena de retos y desafíos. De ahora en más, serás un entrenador de Pokémones. Por ahora, podrás explorar el mundo y aprender sobre las curiosas criaturas que pueblan este planeta.'
    }
    
    const getImage = () => {
        if (window.location.toString().includes('/map')) return '/images/map.png'
        else if (window.location.toString().includes('/pokedex')) return '/images/pokemon-detail.png'
        else if (window.location.toString().includes('/combate')) return '/images/combate-dialog.png'
        else return ''
    }
    
    const title = getTitle()
    const content = getContent()
    const imgSrc = getImage()
    
    return (
        <div>
            <div className='flex items-center justify-between'>
                <nav>
                    <div className='space-x-16 flex justify-start items-center'>
                        {navItems.map((item, index) => (
                            <NavItem key={index} name={item.name} icon={item.icon} link={item.link} iconOpen={item.iconOpen} />
                        ))}
                    </div>
                </nav>
                <div className='cursor-pointer' onClick={() => {setOpen(true)}}>
                    <Info
                        height={'50px'}
                        width={'50px'}
                        className='hover:scale-110 duration-300 transform transition-transform rounded-full bg-yellow-400 hover:bg-blue-600 hover:text-yellow-400 text-blue-600'
                    />
                </div>
            </div>
            <div className='mt-8'>
                {children}
            </div>
            {open &&
                    <Dialog open={open}
                            onOpenChange={() => {setOpen(!open)}}
                    >
                        <DialogContent className='space-y-3'>
                            <DialogHeader className='space-y-4'>
                                <DialogTitle className='flex flex-row items-center space-x-4 text-xl'>
                                    <img src='/pokebola.svg' width={40} height={40} />
                                    <h1>{title}</h1>
                                </DialogTitle>
                            </DialogHeader>
                                <p>{content}</p>
                                <div className='w-full h-full flex flex-wrap space-y-4 justify-center mt-2'>
                                    <img src={imgSrc}/>
                                </div>
                        </DialogContent>
                    </Dialog>
            }
        </div>
    )
}

export default Layout
