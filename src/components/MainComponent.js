import React from 'react';

import NavBar from './NavComponent';
import Footer from './UI/FooterComponent';
import LandingPage from './UI/LandingComponent';

import {Switch, Route, Redirect} from 'react-router-dom';

function NotFound404(){
    return(
        <div>
            <h1 className='text-danger'>404</h1>
            <h3>Content Not Found</h3>           
        </div>
    );
}

function Main() {
    return (
        <div>
            <NavBar />

            <Switch>
                <Route path='/home' component={LandingPage}/>
                <Route path='/404' component={NotFound404}/>
                <Redirect to='/home' />
            </Switch>

            <Footer />
        </div>
    );
}

export default Main;