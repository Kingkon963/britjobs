import React, {Component} from 'react';
import {JOBS} from '../data/jobs';

class JobsList extends Component{
    render(){
        const jobs = JOBS.map((job) => {
            return(
                <div className='row job-card'>
                    <div className="col-12 col-sm-6">
                        <h4 >{job.title} <span className="badge ">Featured job</span></h4>
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
							<button className="ml-auto mr-sm-3 love_btn align-self-start"
							onclick="toggleLoveBtn(event)">
								<img src={job.isFavourite?"assets/img/love-fill.svg":"assets/img/love.svg"} width="60px" alt="" />
							</button>
                            <img className="img-fluid img-thumbnail company_img" 
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

export default JobsList;