import '../styles/Header.scss'

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
                <img src="../assets/leaf.png"/>
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