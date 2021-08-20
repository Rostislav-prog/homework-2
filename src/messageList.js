import React from "react";



export const MessegeList = (props) => {

    // const [list, setList] = useState([{ autor: 'hhh', text: 'ggg' }]);
    
    return (
        <>
            {props.list.map((element) => {
            return (<div>{element.autor} написал {element.text}</div>)
            })}
            

        </>
        
    );

};