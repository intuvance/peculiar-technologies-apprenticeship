function Sidebar() {
    return(

        <div className="app-layout">

            <div className="sidebar">
          <h2>PSMS UGANDA</h2>
          <nav class="sidebar-nav">

          <div className="active"> 
            <a href="">Dashboard</a>
          </div>
          
          <div className="active">
            <a href="#" > Admissions</a>
          </div>

          <div className="active">
            <a href="#" > Students</a>
            </div>
          <div className="active">
            <a href="#" >Teachers</a>
            </div>
          <div className="active">
            <a href="#" >Parents</a>
            </div>
         <div className="active">
             <a href="#">classes</a>
             </div>
          <div className="active">
            <a href="#" >School fees</a>
            </div>
          <div className="active"> 
            <a href="#">Finances</a>
          </div>
          </nav>
          </div>
          <main className="main-container">
          </main>
       </div>
    )
}
export default Sidebar;