import PageHeader from "components/Header/PageHeader";
import React from "react";
import MenuBar from "./component/MenuBar";
import NftPriceCard from "./component/NftPriceCard";
import {Col,Row} from "antd";
import "./css/index.css";
import {TicketCardData} from 'data/ExploreData';
import ContentNav from "./component/ContentNav";

const ExploreView = (props) => {
  return (
    <>
      <PageHeader theme="white" />
      <Row class="PageContent">
        <MenuBar />
        <Col className="MainContent">
            <ContentNav/>
            <Col className="TicketGrid">
                <NftPriceCard data={TicketCardData}/>
            </Col>
        </Col>
      </Row>
    </>
  );
};

export default ExploreView;
