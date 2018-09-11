import React, { Component } from 'react'
import { Nav, Footer } from '../views';
import { Results } from '../containers';

class Home extends Component {
  render() {
    return (
        <div className="wrapper">
        <div className="sidebar" data-background-color="white" data-active-color="danger">  
            <div className="sidebar-wrapper">
            <div className="logo">
                <a href="http://www.creative-tim.com" className="simple-text">
                Creative Tim
                </a>
            </div>


            <ul className="nav">
                <li className="active">
                <a href="dashboard.html">
                    <i className="ti-panel" />
                    <p>Dashboard</p>
                </a>
                </li>
                <li>
                <a href="user.html">
                    <i className="ti-user" />
                    <p>User Profile</p>
                </a>
                </li>
                <li>
                <a href="table.html">
                    <i className="ti-view-list-alt" />
                    <p>Table List</p>
                </a>
                </li>
                <li>
                <a href="typography.html">
                    <i className="ti-text" />
                    <p>Typography</p>
                </a>
                </li>
                <li>
                <a href="icons.html">
                    <i className="ti-pencil-alt2" />
                    <p>Icons</p>
                </a>
                </li>
                <li>
                <a href="maps.html">
                    <i className="ti-map" />
                    <p>Maps</p>
                </a>
                </li>
                <li>
                <a href="notifications.html">
                    <i className="ti-bell" />
                    <p>Notifications</p>
                </a>
                </li>
                <li className="active-pro">
                <a href="upgrade.html">
                    <i className="ti-export" />
                    <p>Upgrade to PRO</p>
                </a>
                </li>
            </ul>
            </div>
        </div>


        <div className="main-panel">
        {/* Nav goes here */}
        <Nav />

            <div className="content">
                {/* Results */}
                <Results />
            </div>

            {/* Footer */}
            <Footer />
        </div>
        </div>

    )
  }
}

export default Home;