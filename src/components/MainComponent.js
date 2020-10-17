import React, {useState} from 'react';

import NavBar from './NavComponent';
import Footer from './UI/FooterComponent';
import LandingPage from './Pages/LandingComponent';
import JobsPage from './Pages/JobsPageComponent';
import SignInPage from './Pages/SignInPageComponent';

import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {toggleFavourite} from '../redux/ActionCreators';
import { firebaseAuth } from '../firebase/config';

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs,
        users: state.users
    };
};

const mapDispatchToProps = dispatch => ({
    toggleFavourite: (jobId) => dispatch(toggleFavourite(jobId)) 
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
    /*constructor(props){
        super(props);
        this.state = {
            isAuthenticated: firebaseAuth.currentUser !== null
        }
    }*/
    let [isAuthenticated, setIsAuthenticated] = useState(firebaseAuth.currentUser !== null);

    
        return (
            <div className='main'>
                <NavBar isAuthenticated={isAuthenticated}/>

                <Switch>
                    <Route path='/home' >
                        <LandingPage jobs={props.jobs}/>
                    </Route>
                    <Route path='/jobs'>
                        <JobsPage jobs={props.jobs} />
                    </Route>
                    <Route path='/signin'>
                        <SignInPage setIsAuthenticated={setIsAuthenticated}/>
                    </Route>
                    <Route path='/404' component={NotFound404}/>
                    <Redirect to='/home' />
                </Switch>

                <Footer />
            </div>
        );
    

}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));