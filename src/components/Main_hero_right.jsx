import List_item from "./List_item"

function Main_hero_right(props){
    const { list, selectedItems, onItemToggle } = props
    return(
        
            <ul className="main_hero_right">
                {list.map((item)=>{
                    return <List_item 
                        key={item.name}
                        name={item.name}
                        value={item.value}
                        checked={selectedItems.includes(item.name)}
                        onChange={() => onItemToggle(item.name)}
                    
                    />
                })}
            </ul>
    
    )
}

export default Main_hero_right
