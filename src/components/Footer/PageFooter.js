import React from "react";
import { Col,Input,Row } from "antd";
import "./PageFooter.css";
import { SharedImage } from "constant/ImageConstant";
import {
  Twitter,
  EnvelopeOpenFill,
  Instagram,
  Discord
} from "react-bootstrap-icons";

const PageFooter = (props) => {
  const theme = props.theme;
  return (
    <>
      <Row className={"PageFooter "+theme} justify="center">
        <Row className="PageFooterInRow">
          <Col className="PartOne FooterCol">
            <img alt="Img" src={SharedImage.Logo} className="FooterLogo" />
            <p className={"PartOneText "+theme+"Text"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </Col>
          <Col className="PartTwo FooterCol">
            <span className={"PartCaption "+theme+"TextCaption"}>EXPLORE NAFFLES</span>
            <a href="." className={"PartTwoLink "+theme+"Text"}>ALL NFTS</a>
            <a href="." className={"PartTwoLink "+theme+"Text"}>NEW</a>
            <a href="." className={"PartTwoLink "+theme+"Text"}>ART</a>
            <a href="." className={"PartTwoLink "+theme+"Text"}>MUSIC</a>
          </Col>
          <Col className="PartThree FooterCol">
            <span className={"PartCaption "+theme+"TextCaption"}>MY ACCOUNT</span>
            <a href="." className={"PartTwoLink "+theme+"Text"}>PROFILE</a>
            <a href="." className={"PartTwoLink "+theme+"Text"}>WALLET</a>
            <a href="." className={"PartTwoLink "+theme+"Text"}>TRANSACTION HISTORY</a>
          </Col>
          <Col className="PartFourCover">
            <Col className="PartFourRow">
              <Col className="PartFour">
                <span className={"PartBigCaption "+theme+"TextCaption"}>STAY IN THE LOOP</span>
                <p className={"PartOneText "+theme+"Text"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </Col>
              <Row className="ExternalLinkRow">
                <span className={"CoverLink "+theme+"CoverLink"}>
                  <Twitter color="#01e0dd" className="ExternalLink" />
                </span>
                <span className={"CoverLink "+theme+"CoverLink"}>
                  <Instagram color="#01e0dd" className="ExternalLink" />
                </span>
                <span className={"CoverLink "+theme+"CoverLink"}>
                  <Discord color="#01e0dd" className="ExternalLink" />
                </span>
                <span className={"CoverLink "+theme+"CoverLink"}>
                  <EnvelopeOpenFill color="#01e0dd" className="ExternalLink" />
                </span>
              </Row>
            </Col>
            <Row className="SignUpRow">
                <Input placeholder="Your email address" className="SignUpInput"></Input>
                <a href="." className={"SignUpBtn "+theme+"Button"}>Sign Up</a>
            </Row>

          </Col>
        </Row>
        <Row className="CopyRightRow">
                <span className={"CopyRight "+theme+"Text"}>© Copyright 2017-2021 All Rights Reserved.</span>
                <span className="Split"></span>
                <a href="." className={"CopyRightLink "+theme+"TextCaption"}>Privacy Policy</a>
                <a href="." className={"CopyRightLink "+theme+"TextCaption"}>Terms of Use</a>
        </Row>
      </Row>
    </>
  );
};

export default PageFooter;
