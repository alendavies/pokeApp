import { PokemonCard } from '@/components/PokemonCard'
import PokemonStats from '@/components/PokemonStats'
import {useState} from "react";
import {Button} from "@/components/ui/button";

interface ToggleStatsProps {
    name: string,
    setOpen: (arg: boolean) => void
}

const ToggleStats = ({ name, setOpen }: ToggleStatsProps) => {
    const [showStats, setShowStats] = useState<boolean>(false)

    return (
        <>
            <div onClick={() => setShowStats(a => !a)}>
                {showStats ? <PokemonStats name={name} /> : <PokemonCard nameOrId={name} />}
            </div>
            <div className='flex justify-center w-full pt-2 space-x-2'>
                <div className='hover:shadow-lg hover:scale-105 hover:duration-80'>
                    <Button variant='secondary' onClick={() => {setShowStats(!showStats)}}>
                        {showStats ? 'Ocultar' : 'Ver'}
                    </Button>
                </div>
                <div className='hover:shadow-lg hover:scale-105 hover:duration-80'>
                    <Button variant='destructive' onClick={() => setOpen(true)}>
                        Atacar
                    </Button>
                </div>
            </div>
        </>
    )
}

export default ToggleStats
