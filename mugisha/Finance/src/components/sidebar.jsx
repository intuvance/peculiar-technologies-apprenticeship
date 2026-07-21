import React from 'react'


function sidebar() {
    return (
        <div>

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
        </div>
    );

}

export default sidebar;