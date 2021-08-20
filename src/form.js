import React from "react";



export const Form = ({list, autor, text, setAutor, setText}) => {
    
    const setAutorChenge = (e) => {
    setAutor(e.target.value);   
    };

    const setTextChenge = (e) => {
    setText(e.target.value);   
    };

    const hendleClick = () => {
            list.push({ autor, text });
        alert('Сообщение отправлено');
     
    };
    
    return (

        <div>
            <input type='text' value={autor} onChange={setAutorChenge}/>
            <input type='text' value={text} onChange={setTextChenge} />
                <button onClick={hendleClick}>Click</button>
                
        </div>
    )

};
