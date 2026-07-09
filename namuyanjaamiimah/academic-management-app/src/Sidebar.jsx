function Sidebar() {
    return (
        < div className="sidebar" >
            {/* FIRST CONTAINER */ }
            <div>
                <h1>PSMS</h1>
                <p>Super Admin Portal</p>

                <div>
                    <a href="">Dashboard</a>
                    <a href="">Admissions</a>
                    <a href="">Students</a>
                    <a href="">Teachers</a>
                    <a href="">Examinations</a>
                    <a href="">Report cards</a>
                    <a href="">School Fees</a>
                    <a href="">Library</a>
                </div>

                <div>
                    <p className="newadmission"> <a href="">+ New admissions</a></p>
                    <p>Settings</p>
                    <p>Logout</p>
                </div>
            </div>
            </div >
            


  )
}

export default Sidebar;
