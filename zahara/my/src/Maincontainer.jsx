function Maincontainer () {
    return(
<div className="main-container">
        <div className="header-section">
            <div className="welcome-text">
                <h1>Good morning Head Teacher</h1>
                <p>Here is what's happening at PSMS Uganda.</p>
            </div>
            <div className="header-buttons">
                <button className="btn btn-report">📊 Daily Report</button>
                <button className="btn btn-action">⚡ Quick Action</button>
            </div>
        </div>

        <div className="metrics-grid">
            <div className="card">
                <div className="card-title">Total Students</div>
                <div className="card-value">2,450</div>
                <div className="card-subtext"><span className="trend-up">▲ +4.2%</span> from last term</div>
            </div>
            <div className="card">
                <div className="card-title">Total Teachers</div>
                <div className="card-value">120</div>
                <div className="card-subtext">✔️ 98% present today</div>
            </div>
            <div className="card">
                <div className="card-title">Fees Collection</div>
                <div className="card-value">UGX 450M</div>
                <div className="card-subtext">═ 75% of target</div>
            </div>
            <div className="card">
                <div className="card-title">Active Courses</div>
                <div className="card-value">48</div>
                <div className="card-subtext">⚏ Across 6 streams</div>
            </div>
        </div>

        <div className="visuals-grid">
            <div className="chart-box">
                <div className="chart-header">
                    <div>
                        <h3>Student Enrollment Trends</h3>
                        <span className='pr'>Academic Year 2023-2024</span>
                    </div>
                    <span>Last 6 Months ▾</span>
                </div>
                <div className="bar-chart">
                    <div className="bar-wrapper"><div className="bar"></div></div>
                    <div className="bar-wrapper"><div className="bar" ></div></div>
                    <div className="bar-wrapper"><div className="bar"></div></div>
                    <div className="bar-wrapper"><div className="bar" ></div></div>
                    <div className="bar-wrapper"><div className="bar" ></div></div>
                    <div className="bar-wrapper"><div className="bar highlight"></div></div>
                </div>
            </div>

            <div className="chart-box">
                <div className="chart-header">
                    <h3>Fees Collection Status</h3>
                </div>
                <p>Current Term Progress</p>
                
                <div className="donut-container">
                    <div className="donut-chart">
                        <div className="donut-center-text">
                            <h2>75%</h2>
                            <p>Paid</p>
                        </div>
                    </div>
                </div>
                </div>
        </div>
</div>
    )
}
export default Maincontainer;