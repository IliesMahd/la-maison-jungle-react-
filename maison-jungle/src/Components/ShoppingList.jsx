export function ShoppingList() {
    const plantList = [
        'monstera',
        'ficus lyrata',
        'photos argenté',
        'yucca',
        'palmier'
    ]

    return (
        <ul>
            {
                plantList.map((plant) => {
                    return (
                        <li>{plant}</li>
                    )
                })
            }
        </ul>
    )
}