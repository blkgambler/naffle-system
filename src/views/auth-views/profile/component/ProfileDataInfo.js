import React from "react";
import "../css/ProfileDataInfo.css";
import { Col,Card,Row } from "antd";
import { ProfileImage } from "constant/ImageConstant";
import NftPriceCard from "./NftPriceCard";
import { NafflesListBody, NafflesListHeader, ProfileCardData } from "data/ProfileData";
import ProfileCardList from "./ProfileCardList";
import { TransactionHeaderData,TransactionBodyData } from "data/ProfileData";
import TransactionList from "./TransactionList";

const ProfileDataInfo = () => {
  return (
    <>
      <Col className="UserProfile2">
        <Card className="UserProfileCard">
          <Row className="CardInRow">
            <img
            alt=""
              className="UserAvatar2"
              src={ProfileImage.ProfileUserInfo.ProfileUserAvatar2}
            />
            <Col className="ProfileDes">
              <span className="UserLoginState">Name of Raffel User Is In</span>
              <a href="." className="ProfileView">VIEW</a>
            </Col>
          </Row>
        </Card>
        <Row className="ProfileCardGrid">
          <NftPriceCard data={ProfileCardData} />
        </Row>
        <ProfileCardList header={TransactionHeaderData} body={TransactionBodyData} />
        <TransactionList header={NafflesListHeader} body={NafflesListBody} />
      </Col>
    </>
  );
};

export default ProfileDataInfo;
