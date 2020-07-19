import React,{useContext} from 'react'
import ContactContext from '../../context/contact/ContactContext'


 const ContactItem = ({contact}) => {

     const contactContext = useContext(ContactContext)
     
     const  {id,name,email,phone,type} = contact

    const onDelete = () => {
        contactContext.deleteContact(id)
        contactContext.clearCurrent()
    }

    return (
        <div className="card bg-light">
           <h3 className="text-primary text-left">
               {name}{' '} <span className={'badge '+(type === 'professional' ? 'badge-success' : 'badge-primary')} style={{float: 'right'}}>
                   {type.charAt(0).toUpperCase() + type.slice(1)}
               </span>
           </h3> 
           <ul className="list">
            {email && (
                <li>
                    <i className="fas fa-envelope-open"></i>{' '+email}
                </li>
            )}
             {phone && (
                <li>
                    <i className="fas fa-phone"></i>{' '+phone}
                </li>
            )}
           </ul>
           <p>
               <button className="btn btn-dark btn-sm" onClick={() => contactContext.setCurrent(contact)}>Edit</button>
               <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
           </p>
        </div>
    )
}
export default ContactItem