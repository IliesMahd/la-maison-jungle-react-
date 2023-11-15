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
                    <li>{plant}</li>
                })
            }
        </ul>
    )
}