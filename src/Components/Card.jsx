import React from 'react'


function Card(props) {
    
    const { color } = props;

    
        

    return (
        <div className="card"
        style={{backgroundColor:color.color, 
            width:'13em', height:'13em'}}
        >        
        </div>
    )
}

export default Card