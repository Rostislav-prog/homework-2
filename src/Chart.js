import React from 'react';

function Chart(props) {

    return (
        
        <>
            {props.messageList.map((element) => {
            return (<div>{element.autor} написал {element.text}</div>)
            })}


        </>
    )
    
}

export default Chart;