import { useState } from "react"
import Header from "./Header"
import Main_hero from "./main_hero"

function Welcome() {
  const list_of_value = [
    { name: "value 1", value: 20 },
    { name: "value 2", value: 30 },
  ]

  const list_of_value2 = [
    { name: "value 3", value: 40 },
    { name: "value 4", value: 50 },
    { name: "value 5", value: 60 },
    { name: "value 6", value: 70 },
    { name: "value 7", value: 80 },
  ]

  const [selectedType, setSelectedType] = useState("type1")
  const [selectedItems, setSelectedItems] = useState([])

  const handleTypeChange = (type) => {
    if (selectedType === type) {
      setSelectedType(null)
    } else {
      setSelectedType(type)
    }
    setSelectedItems([])
  }

  const handleItemToggle = (itemName) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemName)) {
        return prevSelectedItems.filter((name) => name !== itemName)
      }
      return [...prevSelectedItems, itemName]
    })
  }

  let activeList = []

  if (selectedType === "type1") {
    activeList = list_of_value
  } else if (selectedType === "type2") {
    activeList = list_of_value2
  }

  const selectedCount = selectedItems.length
  const selectedSum = activeList
    .filter((item) => selectedItems.includes(item.name))
    .reduce((sum, item) => sum + item.value, 0)

  return (
    <div className="app_shell">
      <Header
        selectedType={selectedType}
        selectedCount={selectedCount}
        selectedSum={selectedSum}
      />
      <Main_hero
        list={activeList}
        selectedType={selectedType}
        onTypeChange={handleTypeChange}
        selectedItems={selectedItems}
        onItemToggle={handleItemToggle}
      />
    </div>
  )
}

export default Welcome
