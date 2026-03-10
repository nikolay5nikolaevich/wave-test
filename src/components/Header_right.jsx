function Header_right(props) {
  const { selectedCount, selectedSum } = props

  return (
    <div className="header_right">
      <div className="header_stat">
        <p>Выбрано пунктов: {selectedCount}</p>
      </div>
      <div className="header_stat">
        <p>Общее значение: {selectedSum}</p>
      </div>
    </div>
  )
}

export default Header_right
