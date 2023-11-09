import '../styles/Header.scss'

export function Header () {
    const title = "La maison jungle"
    return (
        <div className="container">
            <img src="../assets/leaf.png"/>
            <h1>{title}</h1>
        </div>
    )
}