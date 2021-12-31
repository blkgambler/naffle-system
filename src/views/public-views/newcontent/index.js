import PageHeader from "components/Header/PageHeader";
import React from "react";
import NftPriceCard from "./component/NftPriceCard";
import {Col,Row} from "antd";
import "./css/index.css";
import {TicketCardData} from 'data/ExploreData';
import CollectionInfoBox from "./component/CollectionInfoBox";

const NewContent = (props) => {
  return (
    <>
      <PageHeader theme="white" />
      <Row class="PageContent">
        <Col className="MainContent">
        <CollectionInfoBox/>
            <Col className="TicketGrid">
                <NftPriceCard data={TicketCardData}/>
            </Col>
        </Col>
      </Row>
    </>
  );
};

export default NewContent;
