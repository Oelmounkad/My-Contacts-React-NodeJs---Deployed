import React, {useState,useContext,useEffect} from 'react'
import AlertContext from '../../context/alert/AlertContext'
import AuthContext from '../../context/auth/AuthContext'
const Register = (props) => {

    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext)


    useEffect(() => {

        if(authContext.isAuthenticated){
            props.history.push('/')
        }
        if(authContext.error === 'User already exists'){
            alertContext.setAlert(authContext.error,'danger')
            authContext.clearErrors()
        }

        // eslint-disable-next-line
    },[authContext.error,authContext.isAuthenticated,props.history])

    const [user,setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const {name,email,password,password2} = user

    const onChange = e => {
        setUser({
            ...user, [e.target.name] : e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault()
        if(name === '' || email === '' || password === ''){
            alertContext.setAlert('Please fill all fields','danger')
        } else if (password !== password2){
            alertContext.setAlert('Passwords do not match','danger')
        }else{
            authContext.register(user)
        }
    }

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Re-type Password</label>
                    <input type="password" name="password2" value={password2} onChange={onChange} />
                </div>
                <input type="submit" value="Register" className="btn btn-primary btn-block" />
            </form>
        </div>
    )
}

export default Register 