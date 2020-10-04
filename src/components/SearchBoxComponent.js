import React, {Component} from 'react';

class SearchBox extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="container searchBar_not_fixed" id="job_search_container">
			<div className="row">
				<div className="col-12" id="job_search_section">
					<div className="row">
						<div className="col-12 col-sm-4 offset-sm-1 my-auto d-flex flex-column">
							<label className="text-white"  htmlFor="">Job Title</label>
							<input className="form-control" type="text" placeholder="Admin Assistant" />
						</div>
						<div className="col-12 col-sm-4 my-auto d-flex flex-column">
							<label className="text-white" htmlFor="">Location</label>
							<input className="form-control" type="text" placeholder="London" />
						</div>
						<div className="col-12 col-sm-2 my-auto d-flex flex-column">
							<label className="dummy" >dummy</label>
							<a href="#header_title_div">
								<button className="form-control" type="button">
                                    <span className="fa fa-search"></span> Search
                                </button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
        );
    }
}

export default SearchBox;