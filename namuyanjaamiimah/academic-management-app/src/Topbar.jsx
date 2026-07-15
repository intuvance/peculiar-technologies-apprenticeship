import man from './assets/man.jpg'

function Topbar() {
  return(
       <div className="topbar">
                            <form action="">

                                <input type="text" placeholder="search exams, students or grades" />
                            </form>
                            <div>
                                <i class="fa-regular fa-bell"></i>
                                <i class="fa-regular fa-circle-question"></i>
                            </div>

                           <div className='top1'>

                             <div className='papboth'>
                              <p className='pap1'>Sir Mary Nakato</p>
                               <p className='pap2'>Headteacher</p>
                            </div>


                            <div className="image">
                                <img src={man} alt="" />
                            </div>
                           </div>
                        
        </div>
  )
}

export default Topbar;