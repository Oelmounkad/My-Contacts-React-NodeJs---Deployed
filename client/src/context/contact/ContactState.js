import React, { useReducer } from 'react';
import ContactContext from './ContactContext'
import ContactReducer from './ContactReducer'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'

const ContactState = props => {
    const initialState = {
        contacts : [
            {
                id: 1,
                name: 'Oussama Elmounkad',
                email: 'oelmounkad@gmail.com',
                phone: '222-222-2222',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Jon doe',
                email: 'jondoe@gmaaaail.com',
                phone: '222-222-2444',
                type: 'professional'
            }
        ]
    }

   const [state, dispatch] = useReducer(ContactReducer, initialState)

   // Action :

   // Add Contact
const addContact = contact => {
    contact.id = 3
    dispatch({type: ADD_CONTACT, payload: contact})
}
   // Delete Contact

   // Set Current Contact

   // Clear Current Contact

   //Update Contact

   // Filter Contact

   // Clear Filter

   return (
       <ContactContext.Provider 
       value={{
           contacts: state.contacts,
           addContact
       }}>

           {props.children}
       </ContactContext.Provider>
   )

}
export default ContactState