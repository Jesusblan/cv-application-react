import "../styles/Info.css";

let inputData = {
  name: "Blas",
  lastName: "De Lezo",
  mail: "user@example.com",
  phone: "+34 633 31 43 89",
};

function Info() {
  return (
    <div className="info">
      <h2>General info</h2>
      <p>Name: {inputData.name}</p>
      <p>Last Name: {inputData.lastName}</p>
      <p>Mail: {inputData.mail}</p>
      <p>Phone: {inputData.phone}</p>
    </div>
  );
}

export default Info;
