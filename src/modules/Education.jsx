import "../styles/Education.css";
import React, { useState } from "react";

function Education() {
  let eduData = {
    title: "Full Stack JS",
    startEnd: "05/2023-Actuality",
    center: "Odin Project",

  };

  const [isData, setData] = useState(eduData);

  const handleSubmit = (event) => {
    event.preventDefault();
    eduData.title = event.target.inputTitle.value;
    eduData.startEnd = event.target.inputStartEnd.value;
    eduData.center = event.target.inputCenter.value;

    setData(eduData);

    console.log(isData);
  };

  //pop up form
  function SetPopup() {
    function InfoForm() {
      return (
        <div>
          <form className="eduForm" onSubmit={handleSubmit}>
            <label>Title:  </label>
            <input name="inputTitle" type="text" />

            <label>Date: </label>
            <input name="inputStartEnd" type="text" />

            <label>Center </label>
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
          <InfoForm />

          <button className="close" onClick={() => setPopup(false)}>
            Close
          </button>
        </div>
      );
    }
  }

  return (
    <div className="education">
      <h2>Education</h2>
      <p>Title: {isData.title}</p>
      <p>Date: {isData.startEnd}</p>
      <p>Center: {isData.center}</p>
      <SetPopup />
    </div>
  );
}

export default Education;
