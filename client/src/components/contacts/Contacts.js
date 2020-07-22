import React, {useContext,useEffect} from 'react'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import ContactContext from '../../context/contact/ContactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
  

    const {contacts,filtered, getContacts} = useContext(ContactContext)

    useEffect(() => {
     getContacts()
    }, []);

    return (
        <> 
    {contacts !== null ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ):<p>loading...</p>}
        </>
    )
}
export default Contacts
