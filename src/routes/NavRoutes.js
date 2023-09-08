import { Home, Briefcase, Settings } from 'react-feather'

const NavRoutes = [
    {
        title: 'Home',
        navLink: '/saller',
        icon: <Home />
    },
    {
        title: 'Products',
        navLink: '/saller/products',
        icon: <Briefcase />
    },
    {
        title: 'Settings',
        navLink: '/saller/settings',
        icon: <Settings />
    }
]

export default NavRoutes;