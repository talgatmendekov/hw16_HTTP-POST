import React, {useEffect, useReducer, useState} from 'react'
import { USER_NAME, USER_PASSWORD, USER_EMAIL, INPUT_BLUR, EMAIL_BLUR, PASSWORD_BLUR} from '../Helpers/constants'
import { loginReducer, initialState } from '../reducer'
import { useNavigate } from 'react-router-dom'
import classes from './SignUp.module.css'
import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'

const SignUp = (  ) => {
    const navigate = useNavigate()
    const [loginState, dispacthLogin] = useReducer(loginReducer, initialState)
    const [formIsValid, setFormIsValid] = useState(false)
    console.log(loginState)

    useEffect(()=>{
        setFormIsValid(loginState.userName.isValid && loginState.userEmail.isValid && loginState.userPassword.isValid)
    },[loginState.userName.isValid, loginState.userEmail.isValid, loginState.userPassword.isValid])

    
    const nameChangeHandler = (event) =>{
        dispacthLogin({type: USER_NAME, payload: event.target.value});
        
    };

    const validateNameHandler = () => {
        dispacthLogin({type: INPUT_BLUR })
    };
    const emailChangeHandler = (event) => {
        dispacthLogin({type: USER_EMAIL, payload: event.target.value});
       
    };

    const validateEmailHandler = () => {
        dispacthLogin({type: EMAIL_BLUR})
    };
 
    const passwordChangeHandler = (event) => {
        dispacthLogin({type: USER_PASSWORD, payload: event.target.value})
        
    };
    
    const validatePasswordHandler = () => {
        dispacthLogin({type: PASSWORD_BLUR})
    }
    const submitChangeHandler = (event) =>{
        event.preventDefault()
        const userInfo = {
            name: loginState.userName.value,
            email: loginState.userEmail.value,
            password: loginState.userPassword.value,
            id: Math.random().toString()
        }
      
    }

  return (
    <Card className={classes['sign-up__form']}>
        <form onSubmit={submitChangeHandler}>
            <div className={classes.inputBlock}>
                <label htmlFor="text">username</label>
                <input type="text" onChange={nameChangeHandler} onBlur={validateNameHandler} className={`${loginState.userName.isValid === false ? classes.invalid : ''}`}/>
                <p>{loginState.userName.error}</p>
                
            </div>
            <div className={classes.inputBlock}>
                <label htmlFor="email">email</label>
                <input type="email" onChange={emailChangeHandler} onBlur={validateEmailHandler} className={`${loginState.userEmail.isValid === false ? classes.invalid: ''}`}/>
                <p>{loginState.userEmail.error}</p>
              
            </div>
            <div className={classes.inputBlock}>
                <label htmlFor="password">password</label>
                <input type="password" onChange={passwordChangeHandler} onBlur={validatePasswordHandler} className={`${loginState.userPassword.isValid === false ? classes.invalid: ''}`} />
                <p>{loginState.userPassword.error}</p>
            </div>
            <Button type='submit' disabled ={!formIsValid} onClick={()=>{navigate('/Login')}}>sign-up</Button>
        </form>
    </Card>
  )
}

export default SignUp