import React from 'react';
import PageHeader from 'components/Header/PageHeader';
import { Row } from 'antd';
import './css/ProfileView.css'
import ProfileUserInfo from './component/ProfileUserInfo';
import ProfileDataInfo from './component/ProfileDataInfo';
import PageFooter from 'components/Footer/PageFooter';

const ProfileView = () =>{
    return(
        <>
        <PageHeader theme="white" ></PageHeader>
        <Row className="ProfileContent" justify="center">
            <Row className="ProfileContentInRow">
                <ProfileUserInfo/>
                <ProfileDataInfo/>
            </Row>
        </Row>
        <PageFooter theme="blue" />
        </>
    )
}

export default ProfileView;