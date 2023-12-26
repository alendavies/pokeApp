import { useState } from 'react'
import { Link } from 'react-router-dom'

type NavItemProps = {
    name: string
    icon: string
    iconOpen: string
    link: string
}

function NavItem(props: NavItemProps) {
    const { icon, link, iconOpen } = props

    const [isHovered, setIsHovered] = useState<boolean>(false)

    return (
        <Link to={link}>
            <div
                className='cursor-pointer '
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={isHovered ? iconOpen : icon}
                    className='w-[100px] h-[50px] hover:scale-110 duration-300 transform transition-transform'
                />
            </div>
        </Link>
    )
}

export default NavItem
