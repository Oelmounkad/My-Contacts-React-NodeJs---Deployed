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
        ],
        current: null,
        filtered: null
    }

   const [state, dispatch] = useReducer(ContactReducer, initialState)

   // Action :

   // Add Contact
const addContact = contact => {
    contact.id = 3
    dispatch({type: ADD_CONTACT, payload: contact})
}
   // Delete Contact
   const deleteContact = id => {
    dispatch({type: DELETE_CONTACT, payload: id})
}
   // Set Current Contact

   const setCurrent = contact => {
    dispatch({type: SET_CURRENT, payload: contact})
}

   // Clear Current Contact
   const clearCurrent = () => {
    dispatch({type: CLEAR_CURRENT })
}

   //Update Contact
   const updateContact = contact => {
    dispatch({type: UPDATE_CONTACT , payload: contact })
}
   // Filter Contact

   const filterContacts = text => {
    dispatch({type: FILTER_CONTACTS , payload: text })
}
   // Clear Filter
   const clearFilter = () => {
    dispatch({type: CLEAR_FILTER })
}


   return (
       <ContactContext.Provider 
       value={{
           contacts: state.contacts,
           current: state.current,
           filtered: state.filtered,
           filterContacts,
           clearFilter,
           addContact,
           deleteContact,
           updateContact,
           setCurrent,
           clearCurrent
       }}>

           {props.children}
       </ContactContext.Provider>
   )

}
export default ContactState