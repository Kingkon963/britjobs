import React, {Component} from 'react';

import SearchBox from '../SearchBoxComponent';

class LandingPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <header className='bg-primary'>
                <div className="container">
			        <div className="row ">
				        <div className="col-12" id="header_title_div">
					        <div className="h-100 d-flex flex-column justify-content-center ">
						        <small>It's Time to</small>
						        <h1>Tell The World<br/>your worth.</h1>
					        </div>
				        </div>
			        </div>
		        </div>
                <SearchBox />
            </header>
        );
    }
}

export default LandingPage;