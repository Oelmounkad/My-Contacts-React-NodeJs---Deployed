import React, {useContext} from 'react'

import ContactContext from '../../context/contact/ContactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
  

    const {contacts,filtered} = useContext(ContactContext)

    return (
        <> 
          {filtered ? filtered.map(fil => <ContactItem key={fil.id} contact={fil} />) : 
          contacts.map(contact => <ContactItem key={contact.id} contact={contact} />) } 
        </>
    )
}
export default Contacts
