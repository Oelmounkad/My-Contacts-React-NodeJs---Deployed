import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = ({title,icon}) => {
    return (
        <div className="navbar bg-primary">
            <h1>
    <i className={icon}/>{' '}{title}
            </h1>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>  
                </li>
            </ul>
        </div>
    )
}

Navbar.defaultProps = {
    title: 'My contacts',
    icon: 'fas fa-id-card-alt'
}

export default Navbar