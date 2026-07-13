import { useState } from 'react'
import { FaPerson, FaUser, FaGear, FaBook, FaMoneyBill, FaMagnifyingGlass, FaCircleQuestion, FaCircleUser, FaBell} from 'react-icons/fa6'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="header">
        <h3>PSMS Uganda</h3>
        <div className="search-bar">
          
          <FaMagnifyingGlass className='icon' color="black" size={16}/>
          <input type="text" placeholder="Search student records..." />
        </div>
        <div className="quicklinks">
          <FaBell color="black" size={15}/>
          <FaCircleQuestion color="black" size={15}/>
          <FaCircleUser color="black" size={20}/> 
       
        </div>
      </section>
      <section id="sidebar">
        <div className="logo">
          <h2>PSMS Uganda</h2>
          <p>Super admin portal</p>
        </div>

       <div className="actions">
        <div className="icon-container">
          <FaBook color="white" size={20}/>
        <p> Dashboards</p>
        </div>
        <div className="icon-container">
          <FaUser color="white" size={20}/>
        <p> Admissions</p></div>
        <div className="icon-container">
          <FaPerson color="white" size={20}/>
        <p> Students</p>
        </div>
        </div>
        <div className="operation">
          <h3 style={{
            color:"white", marginBottom:10, marginLeft:20
          }}>operations </h3>
          <div className="icon-container">
            <FaGear color="white" size={20}/>
          <p> Classes</p>
          </div>
          <div className="icon-container">
            <FaMoneyBill color="white" size={20}/>
          <p> School Fees</p>
          </div>
        </div>
        <div className="sidebar-footer">
          <div className="icon-container">
          <FaGear color="white" size={15}/>
          <p>Settings</p>
          </div>
          <div className="icon-container">
          <FaBook color="white" size={15}/>
          <p>Logout</p>
          </div>
        </div>
      </section>
     <section id="main">
      <div className="top">
      <div className="section1">
        <p>back to admissions dashboard</p>
        <h3>New Student Admission</h3>
        <p>academic year 2024 . term 1 enrollment</p>
        </div>

       <div className="section2">
        <button>save as Draft</button>
        <button style={{
          backgroundColor:"rgb(0, 3, 151)", color:"white", cursor:"pointer"
        }}>Submit Application</button>  
       </div>
       </div>

          <div className="middle">
            <div className="section1">
            <p>personal info</p>
            <p>Location Details</p>
            <p>Parent/Gurdian</p>
            <p>Documents</p>
            </div>
            <div className="section2">
              <div className="components">
            <p>FULL LEGAL NAME</p>
            <input type="text" placeholder="Enter full name" />
             <p>GENDER</p>
            <select>
              <option>Male</option>
              <option>Female</option>
            </select>
            </div>
            <div className="components">
            <p>DATE OF BIRTH</p>
            <input type="date" placeholder="Enter date of birth" />
           
            <p>NATIONALITY</p>
            <input type="text" placeholder="ugandan" />
            </div>
            </div>
            <div className="section3">
              <p>Ensure the name matches the PLE or UCE results slip exactly for official registration purposes.</p>
            </div>
            <div className="section4">
              <button>Next: location</button>
            </div>

          </div>
          <div className="bottom">
            <div className="card1">
              <h3>need help?</h3>
              <p>Contact the registrar's office if you
have trouble obtaining any of the
mandatory location details from your
local council.</p>
            </div>
            <div className="card2">
              <h3>Requirements</h3>
              <p>Valid Birth Certificate</p>
              <p>PLE index number</p>
              <p>passport ID copy</p>
            </div>
            <div className="card3">
              <h2>Welcome to PSMS Uganda</h2>
            </div>
          </div>
      
     </section>
    </>
  )
}

export default App
