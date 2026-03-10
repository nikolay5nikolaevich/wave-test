function List_item(props){
    const { name, value, checked, onChange } = props
    return (
        <li className="list_item">
            <div className="list_item_content">
               
                    <input type="checkbox" checked={checked} onChange={onChange} />
                    <span>{name}</span>
           
                <p className="list_item_value">Value: {value}</p>
            </div>
        </li>
    )
}

export default List_item
