import React from "react";
import { useRef } from "react";
import { ContactData } from "./contact-data-class";


const Form = ({ add }) => {

    const nameRef = useRef('');
    const lastNameRef = useRef('');

function addNewContact(e){
    e.preventDefault();
    const newTask = new ContactData(
        nameRef.current.value,
        lastNameRef.current.value,
        false,
    );
    add(newTask);
}

    return(
        <form onSubmit={(e) => addNewContact(e)} className= 'd-flex justify-content-center align-item-center mb-4'> 
            <div className="form-outline flex-fill">
                <input type="text" ref={nameRef} id='inputName' className="form-control form-control-lg" required autoFocus placeholder="Name" />
                <input type="text" ref={lastNameRef} id='inputDescription' className="form-control form-control-lg" required placeholder="Last Name"/>  
            </div>
            <button type="submit" className="btn btn-success btn-lg ms-2"> ADD CONTACT</button>
        </form>
    )
}
export default Form;