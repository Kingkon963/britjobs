import React, {Component} from 'react';

import {connect} from 'react-redux';

import {toggleFavourite} from '../redux/ActionCreators';

const mapDispatchToProps = dispatch => ({
    toggleFavourite: (jobId) => dispatch(toggleFavourite(jobId))
});

class JobsList extends Component{

    render(){
        const jobs = this.props.jobs.map((job) => {
            return(
                <div className='row job-card' key={job.id}>
                    <div className="col-12 col-sm-6">
                        <h4 >{job.title} <br className='d-sm-none' />{job.isFeatured?<span className="badge ">Featured job</span>:null}</h4>
                        <dl className="row mb-0 ">
                            <dd className="col-6"><span className="fa fa-map-marker"></span> {job.location.area}, {job.location.city}</dd>
                            <dd className="col-6">
                                <span className="fa fa-euro"></span>{' '}
                                £{job.salary.min} - £{job.salary.max}
                            </dd>
                        </dl>
                        <dl className="row mb-0 ">
                            <dd className="col-6"><span className="fa fa-calendar"></span> 12 days ago</dd>
                            <dd className="col-6"><span className="fa fa-briefcase"></span> Permanent, Full-time</dd>
                        </dl>
                    </div>
                    <div className="col-12 col-sm-6">
						<div className="d-flex flex-column">
                            <hr />
							<button className="ml-auto mr-sm-3 love_btn align-self-start"
							onClick={() => this.props.toggleFavourite(job.id)}>
								<img src={job.isFavourite?"assets/img/love-fill.svg":"assets/img/love.svg"} width="40px" alt="" />
							</button>
                            <img className="img-fluid company_img" 
                            src={job.companyLogo} alt="company logo" />
						</div>
					</div>
					<div className="col-12 mt-1">
                        <p>{job.description}</p>
					</div>
                </div>
            );
        });

        return(
            
			    <div className="col-12 job_list">
                        {jobs}
                </div>
            
        );
    }
}

export default connect(null,mapDispatchToProps)(JobsList);