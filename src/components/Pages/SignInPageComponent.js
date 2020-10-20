import React from 'react';
import SignIn from '../SignInComponent';

function SignInPage(props){

    return(
        <>
            <div className='container-fluid signInPage'>
                <div className='pt-5'>
                    {!props.user.currentUser && <SignIn addUser={props.addUser} currentUser={props.user.currentUser}/>}
                    
                    {props.user.currentUser &&
                        <h1 className='text-center'>Hi, {props.user.currentUser.displayName}</h1>
                    }
                </div>
            </div>
        </>
    )
}

export default SignInPage;