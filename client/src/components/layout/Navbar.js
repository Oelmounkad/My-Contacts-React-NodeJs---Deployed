import React,{Fragment,useContext} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/auth/AuthContext'
import { LOGOUT } from '../../context/types'

const Navbar = ({title,icon}) => {

    const authContext = useContext(AuthContext)
    const { isAuthenticated, logout, user, loadUser } = authContext;

    const onLogout = () => {
        authContext.logout()
    }

    const guestLinks = (
        <Fragment>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </Fragment>
    )
    const authLinks = (
        <Fragment>
        <li>Hello {user && user.name}</li>
        <li>
          <a onClick={onLogout} href='#!'>
            <i className='fas fa-sign-out-alt' />{' '}
            <span className='hide-sm'>Logout</span>
          </a>
        </li>
      </Fragment>
    )
    return (
<div className='navbar bg-primary'>
      <h1>
        <Link to='/'>
          <i className={icon} /> {title}
        </Link>
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
    )
}

Navbar.defaultProps = {
    title: 'My contacts',
    icon: 'fas fa-id-card-alt'
}

export default Navbar