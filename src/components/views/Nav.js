import React, { Component } from 'react';

const Nav = (props) => {
    return (
        <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar bar1" />
                <span className="icon-bar bar2" />
                <span className="icon-bar bar3" />
            </button>
            <a className="navbar-brand" href="#">Dashboard</a>
            </div>
            <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
                <li>
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="ti-panel" />
                    <p>Stats</p>
                </a>
                </li>
                <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="ti-bell" />
                    <p className="notification">5</p>
                    <p>Notifications</p>
                    <b className="caret" />
                </a>
                <ul className="dropdown-menu">
                    <li><a href="#">Notification 1</a></li>
                    <li><a href="#">Notification 2</a></li>
                    <li><a href="#">Notification 3</a></li>
                    <li><a href="#">Notification 4</a></li>
                    <li><a href="#">Another notification</a></li>
                </ul>
                </li>
                <li>
                <a href="#">
                    <i className="ti-settings" />
                    <p>Settings</p>
                </a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Nav;