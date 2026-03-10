import Main_hero_left from "./Main_hero_left"
import Main_hero_right from "./Main_hero_right"

const Main_hero = (props) => {
    const { list, selectedType, onTypeChange, selectedItems, onItemToggle } = props
    return(
        <div className="main_hero">
            <Main_hero_left selectedType={selectedType} onTypeChange={onTypeChange} />
            <Main_hero_right list={list} selectedItems={selectedItems} onItemToggle={onItemToggle} />
        </div>
    )

}
export default Main_hero
