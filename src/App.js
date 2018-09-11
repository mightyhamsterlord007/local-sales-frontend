import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
                <div className="content">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="card">
                        <div className="content">
                            <div className="row">
                            <div className="col-xs-5">
                                <div className="icon-big icon-warning text-center">
                                <i className="ti-server" />
                                </div>
                            </div>
                            <div className="col-xs-7">
                                <div className="numbers">
                                <p>Capacity</p>
                                105GB
                                </div>
                            </div>
                            </div>
                            <div className="footer">
                            <hr />
                            <div className="stats">
                                <i className="ti-reload" /> Updated now
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="card">
                        <div className="content">
                            <div className="row">
                            <div className="col-xs-5">
                                <div className="icon-big icon-success text-center">
                                <i className="ti-wallet" />
                                </div>
                            </div>
                            <div className="col-xs-7">
                                <div className="numbers">
                                <p>Revenue</p>
                                $1,345
                                </div>
                            </div>
                            </div>
                            <div className="footer">
                            <hr />
                            <div className="stats">
                                <i className="ti-calendar" /> Last day
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="card">
                        <div className="content">
                            <div className="row">
                            <div className="col-xs-5">
                                <div className="icon-big icon-danger text-center">
                                <i className="ti-pulse" />
                                </div>
                            </div>
                            <div className="col-xs-7">
                                <div className="numbers">
                                <p>Errors</p>
                                23
                                </div>
                            </div>
                            </div>
                            <div className="footer">
                            <hr />
                            <div className="stats">
                                <i className="ti-timer" /> In the last hour
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="card">
                        <div className="content">
                            <div className="row">
                            <div className="col-xs-5">
                                <div className="icon-big icon-info text-center">
                                <i className="ti-twitter-alt" />
                                </div>
                            </div>
                            <div className="col-xs-7">
                                <div className="numbers">
                                <p>Followers</p>
                                +45
                                </div>
                            </div>
                            </div>
                            <div className="footer">
                            <hr />
                            <div className="stats">
                                <i className="ti-reload" /> Updated now
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                        <div className="header">
                            <h4 className="title">Users Behavior</h4>
                            <p className="category">24 Hours performance</p>
                        </div>
                        <div className="content">
                            <div id="chartHours" className="ct-chart" />
                            <div className="footer">
                            <div className="chart-legend">
                                <i className="fa fa-circle text-info" /> Open
                                <i className="fa fa-circle text-danger" /> Click
                                <i className="fa fa-circle text-warning" /> Click Second Time
                            </div>
                            <hr />
                            <div className="stats">
                                <i className="ti-reload" /> Updated 3 minutes ago
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                        <div className="header">
                            <h4 className="title">Email Statistics</h4>
                            <p className="category">Last Campaign Performance</p>
                        </div>
                        <div className="content">
                            <div id="chartPreferences" className="ct-chart ct-perfect-fourth" />
                            <div className="footer">
                            <div className="chart-legend">
                                <i className="fa fa-circle text-info" /> Open
                                <i className="fa fa-circle text-danger" /> Bounce
                                <i className="fa fa-circle text-warning" /> Unsubscribe
                            </div>
                            <hr />
                            <div className="stats">
                                <i className="ti-timer" /> Campaign sent 2 days ago
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card ">
                        <div className="header">
                            <h4 className="title">2015 Sales</h4>
                            <p className="category">All products including Taxes</p>
                        </div>
                        <div className="content">
                            <div id="chartActivity" className="ct-chart" />
                            <div className="footer">
                            <div className="chart-legend">
                                <i className="fa fa-circle text-info" /> Tesla Model S
                                <i className="fa fa-circle text-warning" /> BMW 5 Series
                            </div>
                            <hr />
                            <div className="stats">
                                <i className="ti-check" /> Data information certified
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <footer className="footer">
                <div className="container-fluid">
                    <nav className="pull-left">
                    <ul>
                        <li>
                        <a href="http://www.creative-tim.com">
                            Creative Tim
                        </a>
                        </li>
                        <li>
                        <a href="http://blog.creative-tim.com">
                            Blog
                        </a>
                        </li>
                        <li>
                        <a href="http://www.creative-tim.com/license">
                            Licenses
                        </a>
                        </li>
                    </ul>
                    </nav>
                </div>
                </footer>
            </div>
            </div>

    );
  }
}

export default App;
