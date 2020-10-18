import React, {Component} from 'react';
import {Navbar ,Nav, NavItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import ProfilePic from './UI/ProfilePicComponent';
import { firebaseAuth } from '../firebase/config';

function NavCollapse(props){
    return(
        <div className={`nav-collapse nav-open-${props.navOpen}`}>
            <Nav navbar className='py-3 py-sm-0'>
                <NavItem className='nav-item btn btn-sm' onClick={(props.vw < 576)? props.toggleNav : null}>
                    <Link to='/jobs' className='nav-link'>
                        <i className='fa fa-briefcase mr-1 d-sm-none'></i>
                        <span>Jobs</span>
                    </Link> 
                </NavItem>
                <NavItem className='nav-item btn btn-sm' onClick={(props.vw < 576)? props.toggleNav : null}>
                    <Link to='/jobs'  className='nav-link'>
                        <img src="assets/img/company.png" alt="jobs" className='d-sm-none'/>
                        Companies
                    </Link>
                </NavItem>
                <NavItem className='nav-item btn btn-sm ' onClick={(props.vw < 576)? props.toggleNav : null}>
                    <Link to='/jobs'  className='nav-link'>
                        <img src="assets/img/resource.png" alt="jobs" className="my-0 d-sm-none" width="50%" />
                        Resource
                    </Link>
                </NavItem>

                <>
                    <NavItem className='nav-item ml-auto px-0 d-none d-md-block' onClick={(props.vw < 576)? props.toggleNav : null}>
                        <button className="nav-link btn nav-btn btn-sm btn-md-lg text-white mb-1 mb-sm-0">
                            <strong>Post a Job</strong>
                        </button>
                    </NavItem>
                    <NavItem className='nav-item px-0 d-none d-md-block' onClick={(props.vw < 576)? props.toggleNav : null}>
                        <button className="nav-link btn btn-sm btn-md-lg nav-btn ">Register CV</button>
                    </NavItem>
                    
                        {!props.isAuthenticated && 
                            <NavItem className='nav-item px-0 d-none d-md-block'>
                                <Link to='signin'>
                                    <button className="nav-link btn text-white btn-sm ">
                                        <i className="fa fa-lg fa-bell"></i> Sign in
                                    </button>
                                </Link>
                            </NavItem>
                        }
                        {props.isAuthenticated && 
                            <div className='d-none d-md-block'>
                                <ProfilePic url={firebaseAuth.currentUser.photoURL}/>
                            </div>
                        }
                        
                    
                </>
                                
            </Nav>
            <div className="nav-btns-div mb-1 d-sm-none">
                <button className="nav-item btn btn-sm btn-outline-dark btn-md-lg text-white mb-1 mb-sm-0">
                    <strong>Post a Job</strong>
                </button>
                <button className="nav-item btn btn-sm btn-dark btn-md-lg nav-btn ">Register CV</button>
                <button className="nav-item d-none d-sm-block btn text-white btn-sm "><i className="fa fa-lg fa-bell"></i> Sign in</button>
            </div>
        </div>
    )
}

class NavBar extends Component {

    constructor(props){
        super(props);
        this.navTogglerIconRef = React.createRef();

        this.state = {
            navOpen: window.visualViewport.width>576 ? true: false,
            vw: window.visualViewport.width
        }

        this.toggleNav = this.toggleNav.bind(this);
    }
    //const [navOpen, setNavOpen] = useState(false);
    toggleNav(){
        //toggling Icon
        if(this.navTogglerIconRef.current.classList.contains('fa-bars')){
            this.navTogglerIconRef.current.classList.remove('fa-bars');
            this.navTogglerIconRef.current.classList.add('fa-close');
        }
        else{
            this.navTogglerIconRef.current.classList.remove('fa-close');
            this.navTogglerIconRef.current.classList.add('fa-bars');
        }
            
        //Changing State
        this.setState({
            navOpen: !this.state.navOpen
        });
    }

    render(){
        return (
            <div id="navbar" className='fixed-top'>
                <Navbar dark expand='md'  className='navbar-dark'>
                    <div className='container-fluid'>
                    <button className="navbar-toggler" onClick={() => this.toggleNav()}>
				        <i className="fa fa-bars" id="nav-toggler-icon" ref={this.navTogglerIconRef}></i>
			        </button>
                        <Link to='/home' className='navbar-brand'>
                            <img src="assets/img/logo.png" alt="brand-logo"/>
                        </Link>
                        <div className='d-sm-none d-inline'>
                            {!this.props.isAuthenticated && 
                            <Link to='signin'>
                            <button className="d-sm-none d-inline btn text-white btn-sm  py-0 border">
                                <i className="fa fa-bell"></i> Sign in
                            </button>
                            </Link>
                            }
                            {this.props.isAuthenticated && <ProfilePic url={firebaseAuth.currentUser.photoURL}/>}
                        </div>

                        <NavCollapse navOpen={this.state.navOpen} toggleNav={this.toggleNav}
                        isAuthenticated={this.props.isAuthenticated} vw={this.state.vw}/>
                    </div>
                    
                </Navbar>
            </div>
            );
    }
}

export default NavBar;