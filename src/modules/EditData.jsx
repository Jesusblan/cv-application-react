import '../styles/EditData.css'
import React, { useState } from 'react'

function SetPopup(){

    const [ isPopup, setPopup ] = useState(false);

    if (isPopup === false){
        return (
            <button className='edit' onClick={()=> setPopup(true)}>Edit Info</button>
        );
    }
    else {
        return (
            <div className='input'>

                <InfoForm />
                <button className='close' onClick={()=> setPopup(false)}>Close</button>
            </div>
        );
    }

}

function InfoForm(){
    return (
        <div className='infoForm'>
            <label>Name: </label>
            <input type='text'/>

            <label>Last Name: </label>
            <input type='text' />

            <label>Mail: </label>
            <input type='email' />

            <label>Phone: </label>
            <input type='tel' />
        </div>
    );
}

export default SetPopup