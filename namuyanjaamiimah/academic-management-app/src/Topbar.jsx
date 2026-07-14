import man from './assets/man.jpg'

function Topbar() {
  return(
       <div className="topbar">
                            <form action="">

                                <input type="text" placeholder="search exams, students or grades" />
                            </form>

                            <div className="image">
                                <img src={man} alt="" />
                            </div>
                        
        </div>
  )

  
 
}

export default Topbar;