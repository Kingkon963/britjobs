import React from 'react';

import JobsList from '../JobsListComponent';
import SearchBox from '../SearchBoxComponent';

function JobsPage(props){


    return(
        <div className="container">
            <div className='row'>
                <SearchBox />
            </div>
            <div className='row'>
                <JobsList jobs={props.jobs}/>
            </div>
        </div>
    );
    
}

export default JobsPage;