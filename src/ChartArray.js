import { List, ListItem } from "@material-ui/core";
import React, { useState } from 'react';

function ChartArray({ messageList }) {
    
    const [chartArray, setChartArray] = useState([
        { name: 'messageList', id: 1 },
        { name: 'messageList2', id: 2 },
        { name: 'messageList3', id: 3 }
    ]);

    return (

    <List className="chat-list">
            
            {chartArray.map((element) => {
            return <ListItem><div key={element.id}>{element.name} {element.id}</div></ListItem>
            })}

    </List>
        
        

        
    );
    
}

export default ChartArray;