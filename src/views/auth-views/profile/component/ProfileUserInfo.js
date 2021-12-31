import { Col } from 'antd';
import React from 'react';
import '../css/ProfileUserInfo.css';
// import { Avatar } from 'antd';
import { ProfileImage } from 'constant/ImageConstant';

const ProfileUserInfo = () => {
    return(
        <>
        <Col className="MainProfile">
            <img alt="" className="ProfileImage1" src={ProfileImage.ProfileUserInfo.ProfileUserAvatar1} />
            <span className="BigUsername">JXSmith123</span>
            <span className="UsernameEmail">jsmith@gmail.com</span>
            <span className="CompanyCom">naffles129491reffereal.com</span>
            <span className="LinkDes">refferal link</span>
        </Col>
        </>
    )
}

export default ProfileUserInfo;