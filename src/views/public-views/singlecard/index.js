import { Row } from "antd";
import PageHeader from "components/Header/PageHeader";
import React from "react";
import "./css/SingleCardView.css";
import CardDetailCol from "./component/CardDetailCol";
import CardDetailSingleCard from "./component/CardDetailSingleCard";
import PageFooter from "components/Footer/PageFooter";

const SingleCardView = () =>{
    return(
        <>
        <PageHeader theme="white" />
        <Row className="SingleCardView" justify="center">
        <Row className="SCVInRow">
            <CardDetailCol/>
            <CardDetailSingleCard/>
        </Row>
        </Row>
        <PageFooter theme="blue" />
        </>
    )
}

export default SingleCardView;