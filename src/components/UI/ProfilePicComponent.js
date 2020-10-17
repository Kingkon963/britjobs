import React from 'react';

function ProfilePic({url}){
    return(
        <img className='img-fluid profile-pic' src={url}  alt="profile_pic"/>
    );
}

export default ProfilePic;