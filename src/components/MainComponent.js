import React, {Component} from 'react';

import NavBar from './NavComponent';
import Footer from './UI/FooterComponent';
import LandingPage from './UI/LandingComponent';
import JobsPage from './UI/JobsPageComponent';
import JobsList from './JobsListComponent';

import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {toggleFavourite} from '../redux/ActionCreators';

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



class Main extends Component {
    constructor(props){
        super(props);

    }
    
    render() {
        return (
            <div className='main'>
                <NavBar />

                <Switch>
                    <Route path='/home' >
                        <LandingPage jobs={this.props.jobs}/>
                    </Route>
                    <Route path='/jobs'>
                        <JobsPage jobs={this.props.jobs} />
                    </Route>
                    <Route path='/404' component={NotFound404}/>
                    <Redirect to='/home' />
                </Switch>

                <Footer />
            </div>
        );
    }

}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));