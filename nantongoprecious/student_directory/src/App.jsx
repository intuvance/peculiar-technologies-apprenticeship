import React from "react";
import './index.css';

function App() {
  return (
    <>
      <aside className="sidebar">
            <div className="brand">
                <h1>PSMS Uganda</h1>
                <span>Super Admin Portal</span>
            </div>

            <button className="btn-new-admission">+ New Admission</button>

            <nav>
                <a className="nav-item"> Dashboard</a>
                <a className="nav-item"> Admissions</a>
                <a className="nav-item active"> Students</a>
                <a className="nav-item">Teachers</a>
                <a className="nav-item"> Parents</a>
                <a className="nav-item"> Classes</a>
                <a className="nav-item"> Subjects</a>
                <a className="nav-item"> Timetable</a>
                <a className="nav-item"> Attendance</a>
                <a className="nav-item"> Examinations</a>
                <a className="nav-item"> School Fees</a>
            </nav>

            <div className="sidebar-bottom">
                <a className="nav-item"><span className="icon">⚙</span> Settings</a>
                <a className="nav-item logout"><span className="icon">⎋</span> Logout</a>
            </div>
        </aside><main className="main">

                <div className="topbar">
                    <div className="search-box">🔍 Global search students, staff or fees...</div>
                    <div className="topbar-right">
                        <div className="icon-btn">🔔</div>
                        <div className="icon-btn">?</div>
                        <div className="user-chip">
                            <div className="avatar letters">HM</div>
                                <div>
                                    <div className="name">M. Okello</div>
                                    <div className="role">HEAD TEACHER</div>
                                </div>
                            </div></div>
                    </div>
                

                <div className="page-header">
                    <div>
                        <h2>Student Directory</h2>
                        <p>Manage all enrolled students, their academic status, and fee records.</p>
                    </div>
                    <div className="header-actions">
                        <button className="btn">⬇ Export List</button>
                        <button className="btn primary">+ Add New Student</button>
                    </div>
                </div>

                <div className="stats">
                    <div className="stat-card">
                    
                        <div>
                            <div className="stat-label">Total Students</div>
                            <div className="stat-value">1,248</div>
                            <div className="stat-sub growth">↗ +4.2% from last term</div>
                        </div>
                    </div>
                    <div className="stat-card">
                
                        <div>
                            <div className="stat-label">New Admissions</div>
                            <div className="stat-value">156</div>
                            <div className="stat-sub">Registered Term 2, 2024</div>
                        </div>
                    </div>
                    <div className="stat-card">
      
                        <div>
                            <div className="stat-label">Suspended</div>
                            <div className="stat-value">12</div>
                            <div className="stat-sub warn">Awaiting Disciplinary Board</div>
                        </div>
                    </div>
                </div>

                <div className="filters">
                    <div className="filters-left">
                        <div className="filter-input">Filter by name or ID...</div>
                        <div className="filter-select">All Classes</div>
                        <div className="filter-select">All Streams</div>
                        <div className="filter-select">Fee Status</div>
                    </div>
                    <div className="results-count">Showing 1 – 10 of 1,248</div>
                </div>

                <div className="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Admission No</th>
                                <th>Class/Stream</th>
                                <th>Parent Name</th>
                                <th>Fee Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="student-cell">
                                        <div className="avatar letters">MJ</div>
                                            <div>
                                                <div className="student-name">Mwesigwa Joshua</div>
                                                <div className="student-email">mwesigwa.j@psms.edu</div>
                                            </div>
                                        </div>
                                </td>
                                <td>PSMS/2024/0421</td>
                                <td><span className="badge">Senior 3</span> A</td>
                                <td>
                                    <div className="parent-name">Ssempijja Robert</div>
                                    <div className="parent-phone">+256 772 123456</div>
                                </td>
                                <td><span className="status-pill paid">Paid</span></td>
                                <td className="action-dots">⋯</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="student-cell">
                                        <div className="avatar letters">AN</div>
                                            <div>
                                                <div className="student-name">Amina Nakato</div>
                                                <div className="student-email">amina.n@psms.edu</div>
                                            </div>
                                        </div>
                                </td>
                                <td>PSMS/2024/0115</td>
                                <td><span className="badge">Senior 1</span> B</td>
                                <td>
                                    <div className="parent-name">Musa Kato</div>
                                    <div className="parent-phone">+256 701 987654</div>
                                </td>
                                <td><span className="status-pill partial">Partial</span></td>
                                <td className="action-dots">⋯</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="student-cell">
                                        <div className="avatar letters">LB</div>
                                            <div>
                                                <div className="student-name">Lule Brian</div>
                                                <div className="student-email">lule.b@psms.edu</div>
                                            </div>
                                    </div>
                                </td>
                                <td>PSMS/2023/0882</td>
                                <td><span className="badge">Senior 4</span> A</td>
                                <td>
                                    <div className="parent-name">Babirye Sarah</div>
                                    <div className="parent-phone">+256 755 334455</div>
                                </td>
                                <td><span className="status-pill pending">Pending</span></td>
                                <td className="action-dots">⋯</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="student-cell">
                                        <div className="avatar letters">OK</div>
                                        <div>
                                            <div className="student-name">Otim Kenneth</div>
                                            <div className="student-email">otim.k@psms.edu</div>
                                        </div>
                                    </div>
                                </td>
                                <td>PSMS/2024/0512</td>
                                <td><span className="badge">Senior 2</span> C</td>
                                <td>
                                    <div className="parent-name">Okwera John</div>
                                    <div className="parent-phone">+256 782 665677</div>
                                </td>
                                <td><span className="status-pill paid">Paid</span></td>
                                <td className="action-dots">⋯</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="bottom-panels">
                    <div className="promo-card">
                        <div>
                            <h3>Automate Termly Reports</h3>
                            <p>Our new smart reporting system allows you to generate performance summaries for your entire class in just three clicks. Link student records directly to examination boards.</p>
                            <button className="btn">Explore Feature</button>
                        </div>
                      
                    </div>
                    <div className="help-card">
                    
                        <h4>Need Assistance?</h4>
                        <p>Contact our technical support for help with bulk student uploads.</p>
                        <a href="#">Get Help Now</a>
                    </div>
                </div>

            </main>
         </>
        
)
}

export default App;