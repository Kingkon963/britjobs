import React from 'react';
import { firebaseAuth } from '../../firebase/config';
import SignIn from '../SignInComponent';

function SignInPage(props){
    return(
        <>
            <div className='container-fluid signInPage'>
                <div className='pt-5'>
                    <SignIn setIsAuthenticated={props.setIsAuthenticated}/>
                    {firebaseAuth.currentUser &&
                        <h1 className='text-center'>Hi, {firebaseAuth.currentUser.displayName}</h1>
                    }
                </div>
            </div>
        </>
    )
}

export default SignInPage;