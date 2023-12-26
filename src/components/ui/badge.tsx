import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva('inline-flex items-center rounded-full text-md font-semibold transition-colors', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground',
            secondary: 'border-transparent bg-secondary text-secondary-foreground',
            destructive: 'border-transparent bg-destructive text-destructive-foreground',
            outline: 'text-foreground'
        },
        size: {
            small: 'px-2.5 py-0.5',
            medium: 'px-3.5 py-0.5',
            large: 'px-5 py-1.5'
        },
        type: {
            normal: 'bg-[#a4acaf] text-black',
            grass: 'bg-[#9bcc50] text-black',
            fairy: 'bg-[#fdb9e9] text-black',
            fire: 'bg-[#fd7d24] text-white',
            ghost: 'bg-[#7b62a3] text-white',
            bug: 'bg-[#729f3f] text-white',
            dragon: 'bg-gradient-to-b to-50% from-50% from-[#53a4cf] to-[#f16e57] text-white',
            ground: 'bg-gradient-to-b to-50% from-50% from-[#f7de3f] to-[#ab9842] text-black',
            psychic: 'bg-[#f366b9] text-white',
            steel: 'bg-[#9eb7b8] text-black',
            dark: 'bg-[#707070] text-white',
            electric: 'bg-[#eed535] text-black',
            fighting: 'bg-[#d56723] text-white',
            flying: 'bg-gradient-to-b to-50% from-50% from-[#3dc7ef] to-[#bdb9b8] text-black',
            ice: 'bg-[#51c4e7] text-black',
            poison: 'bg-[#b97fc9] text-white',
            rock: 'bg-[#a38c21] text-white',
            water: 'bg-[#4592c4] text-white'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'small',
        type: 'normal'
    }
})

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, type, ...props }: BadgeProps) {
    return <div className={cn(badgeVariants({ variant, size, type }), className)} {...props} />
}

export { Badge, badgeVariants }
