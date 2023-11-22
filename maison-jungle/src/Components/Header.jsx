import '../styles/Header.scss'
import logo from '../assets/leaf.png'
import { Link } from 'react-router-dom'

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

    const actionItems = [
      {
        icon: '',
        path: '/cart'
      },
      {
        icon: '',
        path: '/login'
      }
    ]

    return (
        <div className="container">
        <div className="wrapper-logo">
          <img src={logo} alt='logo' />
          <h1>{title}</h1>
        </div>
        <div className="wrapper-navigation">
          <ul>
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="wrapper-actions">
          <ul>
            {actionItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>{item.icon}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
}