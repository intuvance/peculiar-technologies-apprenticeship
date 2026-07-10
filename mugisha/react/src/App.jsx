import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <header className="top-header">
        <div className="logo">
          <i className="fas fa-school"></i>
          <h1>Schools Management System</h1>
        </div>

        <div className="search-box">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search..." />
        </div>

        <div className="profile">
          <i className="fas fa-user-circle"></i> Admin Panel
        </div>
      </header>

      <div className="app-layout">

        <aside className="sidebar">
          <nav>
            <div className="section-title">Main Navigation</div>
            <a href="#" className="nav-link active"><i className="fas fa-home"></i> Home</a>
            <a href="#" className="nav-link"><i className="fas fa-users"></i> Students</a>
            <a href="#" className="nav-link"><i className="fas fa-user-tie"></i> Teachers</a>
            <a href="#" className="nav-link"><i className="fas fa-user-friends"></i> Parents</a>
            <a href="#" className="nav-link"><i className="fas fa-th-list"></i> Subjects</a>
            <a href="#" className="nav-link"><i className="fas fa-list-ol"></i> Sections</a>
            <a href="#" className="nav-link"><i className="fas fa-columns"></i> Division</a>
            <a href="#" className="nav-link"><i className="fas fa-graduation-cap"></i> className</a>

            <div className="section-title">Management</div>
            <a href="#" className="nav-link"><i className="fas fa-check-square"></i> Attendance</a>
            <a href="#" className="nav-link"><i className="fas fa-file-alt"></i> Exams</a>
            <a href="#" className="nav-link"><i className="fas fa-star"></i> Manage Marks</a>
            <a href="#" className="nav-link space-between">
              <span><i className="fas fa-credit-card"></i> Payments</span>
              <span className="alert-badge">Pending</span>
            </a>
          </nav>
        </aside>

        <main className="content-area">

          <div className="cards-grid">
            <div className="stat-card color-primary">
              <h2>3</h2>
              <p><i className="fas fa-user-graduate"></i> Total Students</p>
            </div>
            <div className="stat-card color-secondary">
              <h2>3</h2>
              <p><i className="fas fa-user-tie"></i> Total Teachers</p>
            </div>
            <div className="stat-card color-tertiary">
              <h2>1</h2>
              <p><i className="fas fa-user"></i> Total Parents</p>
            </div>
          </div>

          <section className="shortcuts-panel">
            <h3>Schools Management System Quick icon</h3>

            <div className="shortcuts-grid">
              <div className="grid-card">
                <div className="circle-icon"><i className="fas fa-users"></i></div><span>Students</span>
              </div>
              <div className="grid-card">
                <div className="circle-icon"><i className="fas fa-user-tie"></i></div><span>Teachers</span>
              </div>
              <div className="grid-card">
                <div className="circle-icon"><i className="fas fa-user-friends"></i></div><span>Parents</span>
              </div>
              <div className="grid-card">
                <div className="circle-icon"><i className="fas fa-th-list"></i></div><span>Subjects</span>
              </div>
              <div className="grid-card">
                <div className="circle-icon"><i className="fas fa-list-ol"></i></div><span>Sections</span>
              </div>

              <div className="grid-card">
                <div className="circle-icon"><i className="fas fa-graduation-cap"></i></div><span>className</span>
              </div>
              <div className="grid-card">
                <div className="circle-icon"><i className="fas fa-check-square"></i></div><span>Attendance</span>
              </div>
              <div className="grid-card">
                <div className="circle-icon"><i className="fas fa-file-alt"></i></div><span>Exams</span>
              </div>
              <div className="grid-card">
                <div className="circle-icon"><i className="fas fa-star"></i></div><span>Exams Marks</span>
              </div>
              <div className="grid-card">
                <div className="circle-icon"><i className="fas fa-credit-card"></i></div><span>Payments</span>
              </div>

              <div className="grid-card">
                <div className="circle-icon"><i className="fas fa-calculator"></i></div><span>Accounting</span>
              </div>
              <div className="grid-card">
                <div className="circle-icon"><i className="fas fa-book"></i></div><span>Library</span>
              </div>
              <div className="grid-card">
                <div className="circle-icon"><i className="fas fa-bus"></i></div><span>Transport</span>
              </div>
            </div>
          </section>

        </main>
      </div>

    </>
  )
}

export default App
