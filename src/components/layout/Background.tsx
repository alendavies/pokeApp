import { ReactNode } from 'react'
function Background({ children }: { children: ReactNode }) {
    return (
        <div
            className='bg-origin-border bg-top bg-cover bg-no-repeat min-w-screen min-h-screen'
            style={{
                backgroundImage: `url(${'/city.jpg'})`
            }}
        >
            <div className='grid grid-cols-12 h-screen w-full overflow-auto'>
                <div className='bg-gradient-to-r from-transparent to-white/70 col-span-2 w-full'></div>
                <div className='bg-white/70 col-span-8 w-full p-6'>{children}</div>
                <div className='bg-gradient-to-l from-transparent to-white/70 col-span-2 w-full'></div>
            </div>
        </div>
    )
}

export default Background
