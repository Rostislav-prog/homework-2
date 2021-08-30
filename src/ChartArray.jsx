import { List, ListItem } from "@material-ui/core";
import React, { useState } from 'react';

function ChartArray({render}) {
    
    const [chartArray] = useState([
        { name: 'messageList', id: '1' },
        { name: 'messageList2', id: '2' }

    ]);

    return (
    <List className="chat-list">
            
            {chartArray.map((element) => {
                return <ListItem key={element.id}>{element.name} {element.id} </ListItem>
            })}

            {render()}

    </List>
);
    
}

export default ChartArray;