import React from 'react'
import '../css/CoverSection.css'
import {Row,Button} from 'antd';
import { HomeImage } from 'constant/ImageConstant';
// import {RightOutlined} from '@ant-design/icons';
import SectionCard from './SectionCard';
import { HomeCardData } from 'data/HomeData';
import { PUBLIC_PREFIX_PATH } from 'config/AppConfig';
import { Link } from 'react-router-dom';

const CoverSection = () => {
    return(
        <>
        <Row className="CoverSection" justify="center">
            <Row className="CoverInRow" justify="center">
                <Row className="IntroAd" align="middle">
                    <Row className="IntroCol">
                        <p className="AdType">NAFFLES NTF ART</p>
                        <p className="AdMeCaption">Sell Your NFTs at Above the Floor Price</p>
                        <p className="AdText">Sellers, maximise profits on your NFTs, while letting Buyers pay a fraction of the floor price to win them."
- Add CTA button for "Sell Your NFT</p>
                        <Link to={`/${PUBLIC_PREFIX_PATH}/explore`}><Button type="primary" className="SellNFT">Explore Naffles</Button></Link>
                        <Link to={`/${PUBLIC_PREFIX_PATH}/sell`}><Button type="primary" className="SellNFT SellNFTButton">Sell Naffles</Button></Link>
                    </Row>
                    <span className="Split"></span>
                    <Row className="ImageCol">
                        <img alt="" className="IntroImage" draggable="false" src={HomeImage.CoverSection.BgImage}/>
                    </Row>
                </Row>
                <SectionCard data={HomeCardData} />
            </Row>
        </Row>
        </>
    )
}

export default CoverSection;