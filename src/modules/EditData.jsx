import "../styles/EditData.css";
import React, { useState } from "react";
import infoData from "./data";

function SetPopup() {
  const [isPopup, setPopup] = useState(false);

  if (isPopup === false) {
    return (
      <button className="edit" onClick={() => setPopup(true)}>
        Edit Info
      </button>
    );
  } else {
    return (
      <div className="input">
        <InfoForm />

        <button className="close" onClick={() => setPopup(false)}>
          Close
        </button>
      </div>
    );
  }
}

function InfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    infoData.name = event.target.inputName.value;
    infoData.lastName = event.target.inputLastName.value;
    infoData.mail = event.target.inputMail.value;
    infoData.phone = event.target.inputPhone.value;
  };

  return (
    <div>
      <form className="infoForm" onSubmit={handleSubmit}>
        <label>Name: </label>
        <input name="inputName" type="text" />

        <label>Last Name: </label>
        <input name="inputLastName" type="text" />

        <label>Mail: </label>
        <input name="inputMail" type="email" />

        <label>Phone: </label>
        <input name="inputPhone" type="tel" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SetPopup;
