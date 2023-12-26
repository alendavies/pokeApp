import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogClose, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Pokedex } from '../pokedex'

interface ChoosePokemonProps {
    open: boolean,
    setOpen: (arg: boolean) => void
}

function ChoosePokemon({ open, setOpen }: ChoosePokemonProps) {
    
    return (
        <Dialog open={open} onOpenChange={() => {setOpen(!open)}}>
            <DialogContent className='space-y-3 w-full h-full flex flex-grow flex-col lg:max-w-[1000px] lg: max-h-[700px]' >
                <DialogHeader className='space-y-4'>
                    <DialogTitle className='flex flex-row items-center space-x-4 text-xl justify-center'>
                        <h1>Elegí un Pokémon para luchar!</h1>
                    </DialogTitle>
                </DialogHeader>
                <div className='flex flex-grow overflow-auto overflow-x-hidden p-8'>
                    <Pokedex fromChoose />
                </div>
                <div className='flex lg: justify-center'>
                    <DialogClose asChild>
                        <Button
                            type='submit'
                            variant={'outline'}
                            className='bg-[#40d485] font-semibold text-white hover:bg-white hover:text-[#40d485] hover:border-[#40d485] hover:border-2'
                        >
                            Luchar
                        </Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ChoosePokemon
