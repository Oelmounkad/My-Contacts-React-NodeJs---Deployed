import React, {useContext} from 'react'

import ContactContext from '../../context/contact/ContactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
  

    const {contacts} = useContext(ContactContext)

    return (
        <>
          {contacts.map(contact => <ContactItem key={contact.id} contact={contact} />)  }
        </>
    )
}
export default Contacts
