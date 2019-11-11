import React from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        try {
            const response = await axios.post('/login', {email, password})
            const data = response.data 
            console.log(data)
            if (data.success === false) {
                alert(`${data.error}`)
                return
            } else {
                this.setState({
                    email: '',
                    password: ''
                })
                this.props.getUser();
            }
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>

                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='email' 
                        name='email' 
                        label='email'
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='password' 
                        name='password' 
                        label='password'
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        required
                    />
                    <CustomButton type="submit"> Submit </CustomButton>
                </form>
                <a href='/auth/google'><CustomButton isGoogleSignIn> Sign in with Google </CustomButton></a>  
            </div>
        )
    }
}

export default withRouter(SignIn);