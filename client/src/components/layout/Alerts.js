import React, {useContext} from 'react'
import AlertContext from '../../context/alert/AlertContext'


 const Alerts = () => {

     const alertContext = useContext(AlertContext)


    return (
       alertContext.alerts.length > 0 && alertContext.alerts.map(al => 
        <div key={al.id} className={`alert alert-${al.type}`}>
            <i className="fas fa-info-circle" /> {al.msg}
        </div>
        )
    )
}
export default Alerts