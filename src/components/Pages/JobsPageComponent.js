import React from 'react';

import JobsList from '../JobsListComponent';
import SearchBox from '../SearchBoxComponent';

function JobsPage(props){


    return(
        <>
        <div className="container-fluid">
            <div className='row mx-0 px-0'>
                <SearchBox />
            </div>
            <div className='row px-3'>
                <div className='col-12 mt-3'>
                    <h3>2,586 Marketing jobs found</h3>
                    <hr/>
                </div>
                <div className='row px-3'>
                    <div className='col-12 col-sm-3'>
                        <h6>Filter your Search</h6>
                    </div>
                    <div className='col-12 col-sm-8 offset-sm-1'>
                        <JobsList jobs={props.jobs}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='container'>
            
        </div>
        </>
    );
    
}

export default JobsPage;