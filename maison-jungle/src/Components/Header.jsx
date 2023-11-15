import '../styles/Header.scss'
import logo from '../assets/leaf.png'

export function Header () {
    const title = "La maison jungle"
    const navItems = [
        {
            label: 'Accueil',
            path: '/home'
        },
        {
            label: 'Nos plantes',
            path: '/products'
        },
        {
            label: 'Notre marque',
            path: '/brand'
        },
        {
            label: 'Contactez-nous',
            path: '/contact'
        },
    ]
    return (
        <div className="container">
            <div className="wrapper-logo">
                <img src={logo} alt='logo'/>
                <h1>{title}</h1>
            </div>
            <div className="wrapper-navigation">
                <ul>
                    {
                        navItems.map((item, index) => (
                            <li key={index}>{item.label}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}