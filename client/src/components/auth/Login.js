import React, {useState,useContext,useEffect} from 'react'
import AlertContext from '../../context/alert/AlertContext'
import AuthContext from '../../context/auth/AuthContext'

const Login = (props) => {

    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext)

    useEffect(() => {

        if(authContext.isAuthenticated){
            props.history.push('/')
        }
        if(authContext.error === 'Invalid Credentials'){
            alertContext.setAlert(authContext.error,'danger')
            authContext.clearErrors()
        }

        // eslint-disable-next-line
    },[authContext.error,authContext.isAuthenticated,props.history])


    const [user,setUser] = useState({
        email: '',
        password: ''
    })
    const {email,password} = user

    const onChange = e => {
        setUser({
            ...user, [e.target.name] : e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault()
        if(email === '' || password === ''){
           alertContext.setAlert('Please fill in all fields','danger')
        }else{
            authContext.login(user)
        }
    }

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} />
                </div>
                <input type="submit" value="Login" className="btn btn-primary btn-block" />
            </form>
        </div>
    )
}

export default Login 