import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogClose, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type InstructionsProps = {
    open: boolean
    setOpen(open: boolean): void
}

function Instructions({ open, setOpen }: InstructionsProps) {
    const [currentPage, setCurrentPage] = useState(0)
    const navigate = useNavigate()
    const root: boolean =
        !window.location.toString().includes('/pokedex') && !window.location.toString().includes('/map') && !window.location.toString().includes('/combate')

    const pages = [
        {
            title: 'Instrucciones del juego',
            content: (
                <p>
                    ¡Bienvenido a Mundo Pokémon! Estás por empezar una apasionante aventura, llena de retos y desafíos.
                    De ahora en más, serás un entrenador de Pokémones. Por ahora, podrás explorar el mundo y aprender
                    sobre las curiosas criaturas que pueblan este planeta.
                </p>
            )
        },
        {
            title: 'Pokédex',
            content: (
                <>
                    <p className='text-black'>
                        En la pokédex vas a encontrar tus pokémones y vas a poder ver información de cada uno de ellos.
                    </p>
                    <div className='w-full h-full flex flex-wrap space-y-4 justify-center mt-2'>
                        <img src='/images/pokedex.png' />
                    </div>
                </>
            )
        },
        {
            title: 'Mapa',
            content: (
                <>
                    <p className='text-black'>
                        En el mapa vas a encontrar ubicaciones en las que vas a poder luchar contra otros pokémones para
                        ganártelos. En cada una de las ubicaciones vas a encontrar distintos pokémones.
                    </p>
                    <div className='w-full h-full flex flex-wrap space-y-4 justify-center mt-2'>
                        <img src='/images/map.png' />
                    </div>
                </>
            )
        },
        {
            title: 'Combate',
            content: (
                <>
                    <p className='text-black'>
                        Aquí verás los pokémones contra los que puedes luchar en el destino seleccionado. Presiona "Atacar" para enfrentarte y capturarlo (o salir derrotado)
                    </p>
                    <div className='w-full h-full flex flex-wrap space-y-4 justify-center mt-2'>
                        <img src='/images/combate.png' />
                    </div>
                </>
            )
        }
    ]

    const handleNextPage = () => {
        setCurrentPage(currPage => Math.min(currPage + 1, pages.length - 1))
    }

    const handlePrevPage = () => {
        setCurrentPage(currPage => Math.max(currPage - 1, 0))
    }

    const { title, content } = pages[currentPage]

    return (
        <>
            {root && (
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent className='space-y-3'>
                        <DialogHeader className='space-y-4'>
                            <DialogTitle className='flex flex-row items-center space-x-4 text-xl'>
                                <img src='pokebola.svg' width={40} height={40} />
                                <h1>{title}</h1>
                            </DialogTitle>
                        </DialogHeader>
                        <div>{content && <div>{content}</div>}</div>
                        <DialogFooter className='grid grid-cols-2 w-full'>
                            <div className='justify-self-start'>
                                {currentPage > 0 && (
                                    <Button
                                        variant={'outline'}
                                        onClick={handlePrevPage}
                                        className='bg-[#40d485] font-semibold text-white hover:bg-white hover:text-[#40d485] hover:border-[#40d485] hover:border-2'
                                    >
                                        Anterior
                                    </Button>
                                )}
                            </div>
                            <div className='justify-self-end'>
                                {currentPage < pages.length - 1 ? (
                                    <Button
                                        type='button'
                                        variant={'outline'}
                                        className='bg-[#40d485] font-semibold text-white hover:bg-white hover:text-[#40d485] hover:border-[#40d485] hover:border-2'
                                        onClick={handleNextPage}
                                    >
                                        Siguiente
                                    </Button>
                                ) : (
                                    <DialogClose asChild>
                                        <Button
                                            type='submit'
                                            variant={'outline'}
                                            className='bg-[#40d485] font-semibold text-white hover:bg-white hover:text-[#40d485] hover:border-[#40d485] hover:border-2'
                                            onClick={() => {
                                                navigate('/pokedex')
                                            }}
                                        >
                                            Finalizar
                                        </Button>
                                    </DialogClose>
                                )}
                            </div>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
        </>
    )
}

export default Instructions
