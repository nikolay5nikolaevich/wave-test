const Header_left = (props) => {
  const { selectedType } = props

  let currentType = "не выбран"
  if (selectedType === "type1") {
    currentType = "Тип 1"
  } else if (selectedType === "type2") {
    currentType = "Тип 2"
  }

  return (
    <div className="header_left">
      <p>
        Раздел: <span>{currentType}</span>
      </p>
    </div>
  )
}

export default Header_left
