import React from 'react'

import './sign-in-and-sign-up.styles.scss'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndSignUpPage = ({getUser}) => (
    <div className='sign-in-and-sign-up'>
        <SignIn getUser={getUser} />
        <SignUp getUser={getUser}/>
    </div>
)

export default SignInAndSignUpPage;