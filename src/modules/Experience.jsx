import "../styles/Experience.css";
import React, { useState } from "react";

function Experience() {
  let expData = {
    position: "Senior Web Dev",
    startEnd: "05/2023-Actuality",
    enterprise: "Odin Project",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    position2: "junior Web Dev",
    startEnd2: "09/2021-05/2023",
    enterprise2: "Odin Project",
    description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",

  };

  const [isData, setData] = useState(expData);

  const handleSubmit = (event) => {
    event.preventDefault();
    expData.position = event.target.inputPosition.value;
    expData.startEnd = event.target.inputStartEnd.value;
    expData.enterprise = event.target.inputEnterprise.value;
    expData.description = event.target.inputDescription.value;
    expData.position2 = event.target.inputPosition2.value;
    expData.startEnd2 = event.target.inputStartEnd2.value;
    expData.enterprise2 = event.target.inputEnterprise2.value;
    expData.description2 = event.target.inputDescription2.value

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

            <label>Description: </label>
            <input name="inputDescription" type="text" />
            
            <label>Position:  </label>
            <input name="inputTitle2" type="text" />

            <label>Date: </label>
            <input name="inputStartEnd2" type="text" />

            <label>Enterprise: </label>
            <input name="inputCenter2" type="text" />

            <label>Description: </label>
            <input name="inputDescription2" type="text" />

            <button type="submit2">Submit</button>
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
      <p>Description: {isData.description}</p>
      <br />
      <p>Position: {isData.position2}</p>
      <p>Date: {isData.startEnd2}</p>
      <p>Enterprise: {isData.enterprise2}</p>
      <p>Description: {isData.description2}</p>
      <SetPopup />
    </div>
  );
}

export default Experience;
