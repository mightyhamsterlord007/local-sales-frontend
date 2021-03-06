import React, { Component } from 'react';

const Footer = (props) => {
    return (
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
    )
}

export default Footer;