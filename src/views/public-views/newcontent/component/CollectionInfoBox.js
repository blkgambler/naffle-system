import React from 'react';
import '../css/CollectionInfoBox.css'
import {Row} from 'antd';
import {ExploreImage} from 'constant/ImageConstant';
const CollectionInfoBox = () => {
    return(
        <>
        <Row className="CollectionInfoBox">
            <h2 className="InfoBoxLogo">World Wide Naffle</h2>
            <Row className="InfoCellBox" justify="center">
                <Row className="InfoCell">
                    <span className="NewItemCaption">Crocodile</span>
                    <span className="NewItemText">Name</span>
                </Row>
                <Row className="InfoCell">
                    <span className="NewItemCaption">1.5K</span>
                    <span className="NewItemText">Total</span>
                </Row>
                <Row className="InfoCell">
                    <span className="NewItemCaption">230</span>
                    <span className="NewItemText">Owner</span>
                </Row>
                <Row className="InfoCell">
                    <span className="NewItemCaption"><img className="NewItemBlackArrow" alt="Black Arrow" src={ExploreImage.NftPriceCard.BlackArrow} />3.5</span>
                    <span className="NewItemText">Floor price</span>
                </Row>
                <Row className="InfoCell">
                    <span className="NewItemCaption">7</span>
                    <span className="NewItemText">Naffles Usage</span>
                </Row>
                
            </Row>
        </Row>
        </>
    )
}

export default CollectionInfoBox;