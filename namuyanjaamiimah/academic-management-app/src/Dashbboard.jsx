import Sidebar from "./Sidebar";
import Topbar  from "./Topbar";
import Overview from "./Overview";
import Container from "./Container";
import Lastpart from "./Lastpart";
import Upcomingevents from "./Upcomingevents";


function Dashboard() {
  return(
    <>
    <div className="partone">
        <Sidebar/>
        <div className="parttwo" >
            <Topbar/>
            <Overview/>

            <div className="partthree">
              <Container/>
              <Lastpart/>
            </div>

            <div>
              <Upcomingevents/>
            </div>


            
        </div>
        
    </div>


 </>

  )

  
 
}

export default Dashboard;