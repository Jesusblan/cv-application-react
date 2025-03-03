import "../styles/EditData.css";

function EditData(){

    function PopUp(){
        return (
            <div className="popUp">
                <h1>Edit info here</h1>
            </div>
        )
    }

    return <button className="editButton" onClick={PopUp}>Edit</button>

}

export default EditData