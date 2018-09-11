import React, { Component } from 'react'
import { Nav, Footer } from '../views';
import { Results, Search } from '../containers';

class Home extends Component {
  render() {
    return (
        <div className="wrapper">
        <div className="sidebar" data-background-color="white" data-active-color="danger">  
            <Search />
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