import "../styles/Info.css";
import infoData from "./data";

function Info() {
  return (
    <div className="info">
      <h2>General info</h2>
      <p>Name: {infoData.name}</p>
      <p>Last Name: {infoData.lastName}</p>
      <p>Mail: {infoData.mail}</p>
      <p>Phone: {infoData.phone}</p>
    </div>
  );
}

export default Info;
