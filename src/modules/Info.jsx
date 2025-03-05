import "../styles/Info.css";
import React, { useState } from "react";

function Info() {
  let infoData = {
    name: "Blas",
    lastName: "De Lezo",
    mail: "user@example.com",
    phone: "+34 000 00 00 00",
  };

  const [isData, setData] = useState(infoData);

  const handleSubmit = (event) => {
    event.preventDefault();
    infoData.name = event.target.inputName.value;
    infoData.lastName = event.target.inputLastName.value;
    infoData.mail = event.target.inputMail.value;
    infoData.phone = event.target.inputPhone.value;
    setData(infoData);

    console.log(isData);
  };

  //pop up form
  function SetPopup() {
    function InfoForm() {
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

  return (
    <div className="info">
      <h2>General info</h2>
      <p>Name: {isData.name}</p>
      <p>Last Name: {isData.lastName}</p>
      <p>Mail: {isData.mail}</p>
      <p>Phone: {isData.phone}</p>
      <SetPopup />
    </div>
  );
}

export default Info;
