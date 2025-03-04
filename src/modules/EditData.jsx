import '../styles/EditData.css'
import React, { useState } from 'react'

function SetPopup(){

    const [ isPopup, setPopup ] = useState(false);

    if (isPopup === false){
        return (
            <button onClick={()=> setPopup(true)}>Edit Info</button>
        );
    }
    else {
        return (
            <button onClick={()=> setPopup(false)}>Close</button>
        );
    }

}

export default SetPopup