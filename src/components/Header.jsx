import Header_left from "./Header_left"
import Header_right from "./Header_right"
function Header(props){
    const { selectedType, selectedCount, selectedSum } = props
    return (
        <div className="header">
            <Header_left selectedType={selectedType} />
            <Header_right selectedCount={selectedCount} selectedSum={selectedSum} />
        </div>
        
    )
}
export default Header
