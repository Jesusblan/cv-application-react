import "../styles/Experience.css";
import React, { useState } from "react";

function Experience() {
  let expData = {
    position: "Junior Web Dev",
    startEnd: "05/2023-Actuality",
    enterprise: "Odin Project",

  };

  const [isData, setData] = useState(expData);

  const handleSubmit = (event) => {
    event.preventDefault();
    expData.position = event.target.inputPosition.value;
    expData.startEnd = event.target.inputStartEnd.value;
    expData.enterprise = event.target.inputEnterprise.value;

    setData(expData);

    console.log(isData);
  };

  //pop up form
  function SetPopup() {
    function ExpForm() {
      return (
        <div>
          <form className="expForm" onSubmit={handleSubmit}>
            <label>Position:  </label>
            <input name="inputTitle" type="text" />

            <label>Date: </label>
            <input name="inputStartEnd" type="text" />

            <label>Enterprise: </label>
            <input name="inputCenter" type="text" />

            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }

    const [isPopup, setPopup] = useState(false);

    if (isPopup === false) {
      return (
        <button className="edit" onClick={() => setPopup(true)}>
          Edit Education
        </button>
      );
    } else {
      return (
        <div className="input">
          <ExpForm />

          <button className="close" onClick={() => setPopup(false)}>
            Close
          </button>
        </div>
      );
    }
  }

  return (
    <div className="experience">
      <h2>Experience</h2>
      <p>Position: {isData.position}</p>
      <p>Date: {isData.startEnd}</p>
      <p>Enterprise: {isData.enterprise}</p>
      <SetPopup />
    </div>
  );
}

export default Experience;
