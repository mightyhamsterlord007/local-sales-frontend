import React, { Component } from 'react'
import { Item } from '../views';

class Results extends Component {
  render() {

    const data = [ 
        {   
            id: 1,
            name: 'Air Jordan',
            price: '$500'
        },
        {   
            id: 2,
            name: 'PS5',
            price: '$2000'
        }
    ]



    return (
        <div className="container-fluid">
            <div className="row">
                {
                    data.map((item) => {
                        return <Item key={item.id} item={item} />
                    })
                }
            </div>
        </div>
    )
  }
}

export default Results;