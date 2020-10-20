import React from 'react';
import { Button } from 'reactstrap';
import { firebaseAuth, googleAuthProvider } from '../firebase/config';


function SignIn(props){
    //console.log(firebaseAuth.currentUser);

    async function login() {
        // Signin processing
        await firebaseAuth.signInWithPopup(googleAuthProvider)
        .then((result) => {
            //Signin Success
            console.log(result);
            //let token = result.credential.accessToken;
            let user = result.user;
            
            //adding User to Redux Store
            props.addUser(user);
            
        })
        .catch(err => {
            console.log(`${err.code}: ${err.message}`);
        });

    }


    return(
        <>
            <div className='row'>
                    <div className='col-12 col-sm-4 offset-sm-4 text-center'>
                        <Button color='primary' className='px-5 btn btn-primary' onClick={login}>
                            <div className='d-flex'>
                                <i className='fa fa-google fa-2x mr-2 align-self-center'></i>
                                <span className='align-self-center'>SignIn with Google</span>
                            </div>
                        </Button>
                    </div>
            </div>
        </>
    )
}

export default SignIn;