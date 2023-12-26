import Instructions from '@/components/Instructions'
import { ReactNode, createContext, useEffect, useState } from 'react'

const InstructionsContext = createContext({})

const InstructionsProvider = ({ children }: { children: ReactNode }) => {
    const [read, setRead] = useState<boolean>(false)
    const [open, setOpen] = useState(false)

    const setOpenAndRead = (open: boolean) => {
        setOpen(open)
        !open && setRead(true)
    }

    useEffect(() => {
        !read && setOpen(true)
    }, [read])

    return (
        <InstructionsContext.Provider value={{}}>
            <Instructions open={open} setOpen={setOpenAndRead} />
            {children}
        </InstructionsContext.Provider>
    )
}

export { InstructionsContext, InstructionsProvider }
