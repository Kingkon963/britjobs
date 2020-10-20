import React, { useEffect } from 'react';

import NavBar from './NavComponent';
import Footer from './UI/FooterComponent';
import LandingPage from './Pages/LandingComponent';
import JobsPage from './Pages/JobsPageComponent';
import SignInPage from './Pages/SignInPageComponent';

import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {
    toggleFavourite,
    addUser,
    clearCurrentUser} 
    from '../redux/ActionCreators';
import { useState } from 'react';

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs,
        user: state.users
    };
};

const mapDispatchToProps = dispatch => ({
    toggleFavourite: (jobId) => dispatch(toggleFavourite(jobId)),
    addUser: (user) => dispatch(addUser(user)),
    clearCurrentUser: () => dispatch(clearCurrentUser())
});

function NotFound404(){
    return(
        <div className='page404'>
            <h1 className='text-danger'>404</h1>
            <h3>Content Not Found</h3>           
        </div>
    );
}


function Main(props){
    const [navHeight, setNavHeight] = useState(0);

    useEffect(() => {
        const setBodyPadding = (navH) => {
            document.body.style.paddingTop = navH+'px';
        }
        setBodyPadding(navHeight);
    }, [navHeight]);

    return (
        <div className='main'>
            <NavBar 
            user={props.user} 
            clearCurrentUser={props.clearCurrentUser}
            setNavHeight={setNavHeight}/>

            <Switch>
                <Route path='/home' >
                    <LandingPage jobs={props.jobs}/>
                </Route>
                <Route path='/jobs'>
                    <JobsPage jobs={props.jobs} />
                </Route>
                <Route path='/signin'>
                    <SignInPage 
                    addUser={props.addUser}
                    user={props.user}/>
                </Route>
                <Route path='/404' component={NotFound404}/>
                <Redirect to='/home' />
            </Switch>

            <Footer />
        </div>
    );
    

}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));