import "../styles/Info.css";



function Info({props}) {
  return (
    <div className="info">
      <h2>General info</h2>
      <p>Name: {props.name}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Mail: {props.mail}</p>
      <p>Phone: {props.phone}</p>
    </div>
  );
}

export default Info;
