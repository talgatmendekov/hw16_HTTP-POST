import { USER_NAME, USER_PASSWORD, USER_EMAIL, VALID_EMAIL_REGEX, VALID_INPUT_REGEX, INPUT_BLUR, EMAIL_BLUR, PASSWORD_BLUR } from "./Helpers/constants"


export const initialState = {
    userName: {
        value: '',
        isValid: null,
        error: ''
    },
    userEmail: {
        value: '',
        isValid: null,
        error: ''
    },
    userPassword: {
        value: '',
        isValid: null,
        error: ''
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
        case INPUT_BLUR: 
            return{
                ...prevState,
                userName: {
                    value: prevState.userName.value,
                    isValid: VALID_INPUT_REGEX.test(prevState.userName.value),
                    error: VALID_INPUT_REGEX.test(prevState.userName.value) ? '' :( prevState.userName.value === '') ? 'Please, enter username' : 'username must contian digit'
               
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
        case EMAIL_BLUR:
            return{
                ...prevState,
                userEmail: {
                    value: prevState.userEmail.value,
                    isValid: VALID_EMAIL_REGEX.test(prevState.userEmail.value),
                    error: VALID_EMAIL_REGEX.test(prevState.userEmail.value) ? '' : (prevState.userEmail.value === '') ? 'Please, enter email' : 'email is not valid'
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
        case PASSWORD_BLUR :
            return {
                ...prevState,
                userPassword: {
                    value: prevState.userPassword.value,
                    isValid: prevState.userPassword.value,
                    error: prevState.userPassword.value.length > 5 ? '' : (prevState.userPassword.value === '') ? 'Please, enter password' : 'password symbols must more than 5'
                }
            }
        default: return prevState;
    }
}