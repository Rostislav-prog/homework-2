import React from 'react';
import './Chart.css';
function Chart(props) {

    return (
        
        <div className="Forms">
            {props.messageList.map((element) => {
                return (<div key={element.id}>{element.autor} написал {element.text}</div>)
            })}
        </div>
    )
    
}

export default Chart;


