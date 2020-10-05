import React, {Component} from 'react';

import SearchBox from '../SearchBoxComponent';
import JobsList from '../JobsListComponent';

class LandingPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
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
                <div className='container'>
                    <div className="row" id="job_sector_row">
			            <div className="col-12">
				            <h3 className="row_heading">Jobs by Sector</h3>
			            </div>
			            <div className="col-12 ">
				            <div className="job_sector_grid">
					<button className="sector-btn">
						Engineering
					</button>
					<button className="sector-btn">
						Engineering
					</button>
					<button className="sector-btn">
						Engineering
					</button>
					<button className="sector-btn">
						Engineering
					</button>
					<button className="sector-btn">
						Engineering
					</button>
					<button className="sector-btn">
						Engineering
					</button>
					<button className="sector-btn">
						Engineering
					</button>
					<button className="sector-btn">
						Engineering
					</button>
					<button className="sector-btn">
						Engineering
					</button>
					<button className="sector-btn">
						Engineering
					</button>
					<button className="sector-btn">
						Engineering
					</button>
					<button className="sector-btn">
						Engineering
					</button>
				</div>
			            </div>
			            <div className="col-12 text-center">
				            <button className="see_all_btn">See All Sectors</button>
			            </div>
		            </div>
                    <div className="row mt-1" id="featured_job_row">
                        <JobsList jobs={this.props.jobs}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;