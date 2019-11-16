import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const SignIn = ({getUser}) => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''})
    const { email, password } = userCredentials;

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('/login', {email, password})
            const data = response.data 
            console.log(data)
            if (data.success === false) {
                alert(`${data.error}`)
                return
            } else {
                setCredentials({
                    email: '',
                    password: ''
                })
                getUser();
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (e) => {
        const { value, name } = e.target
        setCredentials({...userCredentials, [name]: value })
    }

    
    return (
        <div className='sign-in'>

            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
        

            <form onSubmit={handleSubmit}>
                <FormInput 
                    type='email' 
                    name='email' 
                    label='email'
                    value={email} 
                    handleChange={handleChange}
                    required
                />
                <FormInput 
                    type='password' 
                    name='password' 
                    label='password'
                    value={password} 
                    handleChange={handleChange}
                    required
                />
                <CustomButton type="submit"> Submit </CustomButton>
            </form>
            <a href='/auth/google'><CustomButton isGoogleSignIn> Sign in with Google </CustomButton></a>  
        </div>
    )
}

export default withRouter(SignIn);