import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    CONTACT_ERROR,
    GET_CONTACTS,
    CLEAR_CONTACTS
} from '../types'

export default (state,action) => {
    switch(action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            } 
            case CLEAR_CONTACTS:
            return {
                ...state,
                contacts: null,
                filtered: null,
                error: null,
                current: null
            } 
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            } 
            case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(con => con._id !== action.payload)
            }    
            case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }  
            case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            } 
            case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(con => con._id === action.payload._id ? action.payload : con)
            } 
            case FILTER_CONTACTS:
                return {
                    ...state,
                    filtered: state.contacts.filter(con => {
                        const regex = new RegExp(`${action.payload}`, 'gi')
                        return con.name.match(regex) || con.email.match(regex)
                    })
                }
                case CLEAR_FILTER:
                    return {
                        ...state,
                        filtered: null
                    }  
                    case CONTACT_ERROR:
                    return {
                        ...state,
                        error: action.payload
                    } 
        default:
         return state;
    }
   
}