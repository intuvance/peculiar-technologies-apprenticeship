import React from 'react'

const name = 'Malaika';
const element = 'Ready for Today!'

function header() {
    return (
        <div>
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
            </header>

        </div>

    );
}
export default header;