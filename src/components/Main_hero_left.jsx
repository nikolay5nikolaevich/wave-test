function Main_hero_left(props) {
  const { selectedType, onTypeChange } = props

  return (
    <div className="main_hero_left">
      <div className="menu_option">
        <input
          type="checkbox"
          checked={selectedType === "type1"}
          onChange={() => onTypeChange("type1")}
        />{" "}
        <span>Тип 1</span>
      </div>

      <div className="menu_option">
        <input
          type="checkbox"
          checked={selectedType === "type2"}
          onChange={() => onTypeChange("type2")}
        />{" "}
        <span>Тип 2</span>
      </div>
    </div>
  )
}

export default Main_hero_left
