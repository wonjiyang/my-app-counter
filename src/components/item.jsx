function Item(props) {
    return (
        <li>
            <strong>{props.item.name}</strong>
            <span>{props.item.price}</span>
        </li>
    )
}

export default Item
