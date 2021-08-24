import React from 'react';

function ChartArray({messageList}) {

    const chartArray = messageList.map((element) => {
        return ({ autor: element.autor, id: element.id } )
    });

    return (
        
        <div>
            {chartArray.map((element) => {
                return (<div key={element.id}>{element.autor} {element.id}</div>)
            })}
        </div>
    );
    
}

export default ChartArray;