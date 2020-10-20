import React, {Component} from 'react';

import SearchBox from '../SearchBoxComponent';
import JobsList from '../JobsListComponent';
import SubscribeForm from '../SubscribeFormComponent';

class LandingPage extends Component{
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
					<div className="container" id="job_search_container">
						<div className='row px-4'>
							<SearchBox />
						</div>
					</div>
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
                        <JobsList jobs={this.props.jobs.filter(job => job.isFeatured)}/>
                    </div>
					<div className="row " id="choose_location_row">
						<div className="col-12 my-5">
							<h3 className="row_heading">Choose By Location</h3>
						</div>
						<div className="location_grid">
							<div className="location_1 bg-primary">
								<h1>London</h1>
							</div>
							<div className="location_2 bg-success">
								<h1>Manchester</h1>
							</div>
							<div className="location_3 bg-secondary">
								<h1>Birmingham</h1>
							</div>
							<div className="location_4 bg-info">
								<h1>Glasgow</h1>
							</div>
						</div>
					</div>
					
					
				</div>
				<div className='container-fluid'>
				<div className="row min-row-height my-5 bg-info" id="stay_ahead_row">
							<div className="col-12 d-flex flex-column justify-content-between align-items-center h-100 py-3">
								<div>
									<h3 >Stay ahead</h3>
									<h3 >Be the one to be searched</h3>
								</div>
								<button>
									Register your CV
								</button>
							</div>
						</div>			
					<div className="row my-5" id="companies_row">
						<div className="col-12">
							<h3 className="row_heading mb-5">Companies Recruiting NOW</h3>
						</div>
						<div className="col-12 companies_grid px-5 ">
							<div className="bg-success">
								<img className="img-fluid" src="http://via.placeholder.com/227x100" alt=""/>
							</div>
							<div className="bg-success">
								<img className="img-fluid" src="http://via.placeholder.com/227x100" alt=""/>
							</div>
							<div className="bg-success">
								<img className="img-fluid" src="http://via.placeholder.com/227x100" alt=""/>
							</div>
							<div className="bg-success">
								<img className="img-fluid" src="http://via.placeholder.com/227x100" alt=""/>
							</div>
							<div className="bg-success">
								<img className="img-fluid" src="http://via.placeholder.com/227x100" alt=""/>
							</div>
							<div className="bg-success">
								<img className="img-fluid" src="http://via.placeholder.com/227x100" alt=""/>
							</div>
							<div className="bg-success">
								<img className="img-fluid" src="http://via.placeholder.com/227x100" alt=""/>
							</div>
							<div className="bg-success">
								<img className="img-fluid" src="http://via.placeholder.com/227x100" alt=""/>
							</div>
							<div className="bg-success">
								<img className="img-fluid" src="http://via.placeholder.com/227x100" alt=""/>
							</div>
							<div className="bg-success">
								<img className="img-fluid" src="http://via.placeholder.com/227x100" alt=""/>
							</div>
							
						</div>
						<div className="col-12 text-center">
							<button className="see_all_btn">See All Companies</button>
						</div>
					</div>
					< SubscribeForm />
				</div>
            </div>
        );
    }
}

export default LandingPage;