import React, {useContext} from 'react'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import ContactContext from '../../context/contact/ContactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
  

    const {contacts,filtered} = useContext(ContactContext)

    return (
        <> 
        <TransitionGroup>
          {filtered ? filtered.map(fil => 
          <CSSTransition key={fil._id} timeout={500} classNames="item">
          <ContactItem contact={fil} />
          </CSSTransition>) : 
          contacts.map(contact =>
            <CSSTransition key={contact._id} timeout={500} classNames="item">
          <ContactItem contact={contact} />
          </CSSTransition>) } 
       </TransitionGroup>
        </>
    )
}
export default Contacts
