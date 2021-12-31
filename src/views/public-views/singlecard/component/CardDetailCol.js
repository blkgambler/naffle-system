import React from "react";
import "../css/CardDetailCol.css";
import { ExploreImage } from "constant/ImageConstant";
import {Col,Collapse} from "antd";
const { Panel } = Collapse;
function callback(key) {
    console.log(key);
  }
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const CardDetailCol = () => {
  return (
    <>
      <Col className="CardDetailCol">
        <img
        alt=""
          className="CardDetailImg"
          src={ExploreImage.NftPriceCard.NftPriceCardImg1}
        />
        <Collapse className="DetailCollapse" expandIconPosition="right" onChange={callback}>
          <Panel className="DetailContent" header="Description" key="1">
            <p>{text}</p>
          </Panel>
          <Panel className="DetailContent" header="PROPERTIES" key="2">
            <p>{text}</p>
          </Panel>
          <Panel className="DetailContent" header="ABOUT BOSS BEAUTIES" key="3">
            <p>{text}</p>
          </Panel>
          <Panel className="DetailContent EndContent" header="DETAILS" key="4">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </Col>
    </>
  );
};

export default CardDetailCol;
