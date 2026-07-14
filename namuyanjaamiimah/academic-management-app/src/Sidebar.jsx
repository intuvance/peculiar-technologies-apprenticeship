function Sidebar() {
    return (
        < div className="sidebar" >
            {/* FIRST CONTAINER */ }
            <div>
                <h1>PSMS</h1>
                <p className="subtitle">Super Admin Portal</p>

                <div className="menuitems">
                    <div className="icons">
                        <a href="">Dashboard</a>
                    </div>

                    <div className="icons">
                        <a href="">Admissions</a>
                    </div>

                    <div className="icons">
                        <a href="">Students</a>
                    </div>

                    <div className="icons">
                        <a href="">Teachers</a>
                    </div>

                    <div className="icons">
                        <a href="">Examinations</a>
                    </div>

                    <div className="icons">
                        <a href="">Report cards</a>
                    </div>

                    <div className="icons">
                        <a href="">School Fees</a>
                    </div>
                    
                    <div className="icons">
                        <a href="">Library</a>
                    </div>
                </div>

                <div>
                    <div>
                        <button className="btn">+ New admissions</button>
                    </div>
                    <p>Settings</p>
                    <p>Logout</p>
                </div>
            </div>
            </div >
            


  )
}

export default Sidebar;
