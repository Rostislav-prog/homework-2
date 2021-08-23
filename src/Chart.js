import React from 'react';

function Chart(props) {

    return (
        
        <div>
            {props.messageList.map((element) => {
                return (<div key={element.id}>{element.autor} написал {element.text}</div>)
            })}
            

        </div>
    )
    
}

export default Chart;