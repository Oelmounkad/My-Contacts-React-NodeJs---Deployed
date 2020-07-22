import React, { useReducer } from 'react';
import ContactContext from './ContactContext'
import ContactReducer from './ContactReducer'
import axios from 'axios'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CONTACT_ERROR,
    CLEAR_FILTER
} from '../types'

const ContactState = props => {
    const initialState = {
        contacts : [],
        current: null,
        filtered: null,
        error: null
    }

   const [state, dispatch] = useReducer(ContactReducer, initialState)

   // Action :

   // Add Contact
const addContact = async contact => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    try {
        const res = await axios.post('/api/contacts',contact,config) 
        dispatch({type: ADD_CONTACT, payload: res.data})
    } catch (err) {
        dispatch({type: CONTACT_ERROR, payload: err.response.msg })
    }
    
    
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
           error: state.error,
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