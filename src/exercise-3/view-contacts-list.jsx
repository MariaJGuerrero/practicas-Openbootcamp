import React from "react";
import { useState } from "react";
import Contact from "./contact";
import { ContactData } from "./contact-data-class";
import Form from "./form";




const ViewContactsList = () => {

    const defaultContact = new ContactData('Pepe', 'Fernandez', false)

    const [contactsList, setContactsList] = useState([defaultContact]);

    function changeState (contact){
        const index = contactsList.indexOf(contact);
        const tempList =[...contactsList];
        tempList[index].state = !tempList[index].state;
        setContactsList(tempList);
    }

    function deleteContact(contact){
        const index = contactsList.indexOf(contact);
        const tempList =[...contactsList];
        tempList.splice(index, 1);
        setContactsList(tempList);
    }

    function addContact(contact){
        const tempList =[...contactsList];
        tempList.push(contact);
        setContactsList(tempList);
    }

    return(
        <div className="col-12">
            <div className="card">
                <div className="card-header p-3">
                    <h5>
                    CONTACT LIST:
                    </h5>
                </div>
            </div>
            <div className="card-body" data-mdb-perfect-scrollbar= 'true' style={{position: 'relative', height: '400px'}}>
                <table>
                    <thead>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Last Name</th>
                            <th scope='col'>state</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactsList.map((contact, index) => {
                                return(
                                    <Contact
                                    key={index} 
                                    contact={contact}
                                    state={changeState}
                                    remove={deleteContact} 
                                    />
                                )
                            }   
                        )}
                    </tbody>
                </table>
                <Form add= {addContact} />
            </div>
        </div>
    )
}

export default ViewContactsList;