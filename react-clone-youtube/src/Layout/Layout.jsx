import Contents from  "../Components/contents/Contents"
import Nav from "../Components/Nav/Nav"
import Sidebar from  "../Components/Sidebar/Sidebar"


function Mainlayout() {
  return (
    
    <section id="main-layout">
      <Contents/>
      <Sidebar/>
      <Nav/>
      
    </section> 
  
    
  )
}

export default Mainlayout
