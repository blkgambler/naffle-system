import React from 'react';
import '../css/StartSelling.css';
import { Row, Col } from 'antd';
import SellingItem from './SellingItem';
import { SellingItemData } from 'data/HomeData';

const StartSelling = () => {
    return(
        <>
            <Row className="StartSelling" justify="center">
                <Col className="SellingInRow" justify="center">
                    <h2 className="StartSellingCaption">START SELLING YOUR NAFFLES TODAY!</h2>
                    <SellingItem data={SellingItemData} />
                </Col>
            </Row>
        </>
    )
}

export default StartSelling;