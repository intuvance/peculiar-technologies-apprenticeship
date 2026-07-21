
import './App.css'
import Sidebar from './components/sidebar.jsx'

function App() {
  //JSX - Syntax extension for Javascript

  const name = 'Malaika';
  const element = 'Ready for Today!'
  //React .....Declarative in nature
  //Javascripit .....Imparative language
  return (
    <>

      <header className="top-header">
        <div className="logo">
          <i className="fas fa-school"></i>
          <h1>Hello, Welcome Back {name}  </h1>
          {element}
        </div>

        <div className="search-box">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search..." />
        </div>

        <div className="profile">
          <i className="fas fa-user-circle"></i> Bursar Panel
        </div>
        <header />

        <div className="app-layout">

          <Sidebar />
          <main className="content-area">

            <div className="cards-grid">
              <div className="stat-card color-primary">
                <h2>3350</h2>
                <p><i className="fas fa-user-graduate"></i> Total Students</p>
              </div>
              <div className="stat-card color-secondary">
                <h2>95</h2>
                <p><i className="fas fa-user-tie"></i> Total Teachers</p>
              </div>
              <div className="stat-card color-tertiary">
                <h2>1815</h2>
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
                  <div className="circle-icon"><i className="fas fa-user-people"></i></div><span>Teachers</span>
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
      </header>

    </>
  )

}

export default App;
