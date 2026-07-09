import Sidebar from "./Sidebar";
import Topbar  from "./Topbar";
import Pageheader from "./Pageheader";



function Dashboard() {
  return(
    <>
    <div className="partone">
        <Sidebar/>

        <div>
            <Topbar/>
            <Pageheader/>

        </div>

        


    </div>
 </>

  )

  
 
}

export default Dashboard;