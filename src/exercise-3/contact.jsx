import React from "react";


const Contact = ({ contact, remove, state }) => {
    return(
        <tr className="fw-normal">
            <th>
            <span className="ms-2">{contact.name}</span> 
            </th>
            <td className="align-middle">
            <span>{contact.lastName}</span>
            </td>
            <td className="align-middle">
                {contact.state ? 
                (<i onClick={() => state(contact)} className="bi-toggle-on" style={{color: 'green' }}></i>) 
                : 
                (<i onClick={() => state(contact)} className="bi-toggle-off" style={{color: 'grey'}}></i>)
                }
            </td>
            <td>
            <i className="bi-trash" style={{color: 'red'}} onClick={() => remove(contact)}></i>
            </td>
        </tr>
    )
}

export default Contact;