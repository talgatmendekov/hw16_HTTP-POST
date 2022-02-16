import { USER_NAME, USER_PASSWORD, USER_EMAIL, VALID_EMAIL_REGEX, VALID_INPUT_REGEX } from "./Helpers/constants"


export const initialState = {
    userName: {
        value: '',
        isValid: null,
    },
    userEmail: {
        value: '',
        isValid: null,
    },
    userPassword: {
        value: '',
        isValid: null,
    }
}

export const loginReducer = (prevState, action) => {
    switch(action.type){
        case USER_NAME:
            return{
                ...prevState,
                userName: {
                    value: action.payload,
                    isValid: VALID_INPUT_REGEX.test(action.payload),
                }
            }
     
        case USER_EMAIL:
            return{
                ...prevState,
                userEmail: {
                    value: action.payload,
                    isValid: VALID_EMAIL_REGEX.test(action.payload),
                    
                }
            }
       
        case USER_PASSWORD :
            const twoLetter = action.payload.slice(0,2)
            const reverseInput = action.payload.split('').reverse().join('')
            return{
                ...prevState,
                userPassword: {
                    value: twoLetter +  reverseInput,
                    isValid: action.payload.trim().length > 5,
                }
            }
        default: return prevState;
    }
}