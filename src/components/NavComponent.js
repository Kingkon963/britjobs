import React, {Component} from 'react';
import {Navbar ,Nav, NavbarBrand, Collapse, NavLink, NavItem} from 'reactstrap';

class NavBar extends Component {

    constructor(props){
        super(props);
        this.navTogglerIconRef = React.createRef();

        this.state = {
            navOpen: false
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
            <div id="navbar" >
                <Navbar dark expand='md'  className='navbar-dark'>
                    <div className='container-fluid'>
                    <button className="navbar-toggler" onClick={() => this.toggleNav()}>
				        <i className="fa fa-bars" id="nav-toggler-icon" ref={this.navTogglerIconRef}></i>
			        </button>
                        <NavbarBrand className='navbar-brand'>
                            <img src="assets/img/logo.png" alt="brand-logo"/>
                        </NavbarBrand>
                        <button className="d-sm-none d-inline btn text-white btn-sm  py-0 border"><i className="fa fa-bell"></i> Sign in</button>
                        <Collapse navbar isOpen={this.state.navOpen}>
                            <Nav navbar className='py-3'>
                                <NavItem className='nav-item btn btn-sm'>
                                    <NavLink className='nav-link'>
                                        <img src="assets/img/jobs.png" alt="jobs" className="my-0" width="50%" />
                                        <span>Jobs</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem className='nav-item btn btn-sm'>
                                    <NavLink className='nav-link'>
                                        <img src="assets/img/company.png" alt="jobs" className="my-0" width="50%" />
                                        Companies
                                    </NavLink>
                                </NavItem>
                                <NavItem className='nav-item btn btn-sm'>
                                    <NavLink className='nav-link'>
                                        <img src="assets/img/resource.png" alt="jobs" className="my-0" width="50%" />
                                        Resource
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <div className="nav-btns-div mb-1">
                                <button className="nav-item btn btn-sm btn-outline-dark btn-md-lg text-white mb-1">
                                    <strong>Post a Job</strong>
                                </button>
                                <button className="nav-item btn btn-sm btn-dark btn-md-lg nav-btn ">Register CV</button>
                                <button className="nav-item d-none d-sm-block btn text-white btn-sm "><i className="fa fa-lg fa-bell"></i> Sign in</button>
                            </div>
                        </Collapse>
                    </div>
                    
                </Navbar>
            </div>
            );
    }
}

export default NavBar;