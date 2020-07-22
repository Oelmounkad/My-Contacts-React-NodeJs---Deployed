import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    CONTACT_ERROR
} from '../types'

export default (state,action) => {
    switch(action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            } 
            case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(con => con.id !== action.payload)
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
                contacts: state.contacts.map(con => con.id === action.payload.id ? action.payload : con)
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