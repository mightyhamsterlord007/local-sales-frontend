import React, { Component } from 'react'
import { Map } from '../views';

class Search extends Component {

   state = {
       map: null
   }

  render() {
    return (
      <div>
           <div className="sidebar-wrapper">
                <Map 
                    onMapReady={ (map) => {
                        if (this.state.map != null) {
                            return;
                        }
                        
                        this.setState({
                            map: map
                        });    
                    }}

                    zoom={14}
                    markers={[{lat: 40.759954, lng: -73.991269}]}
                    center={{lat: 40.759954, lng: -73.991269}}
                    containerElement={<div style={{height: 100 + 'vh'}} />}
                    mapElement={<div style={{height: 100 + 'vh'}} />}

                    />
            </div>
      </div>
    )
  }
}

export default Search;