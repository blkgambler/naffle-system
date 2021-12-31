import { Col } from "antd";
import React from "react";
import "../css/SellingItem.css";
import { Row } from "antd";
// import { HomeImage } from "constant/ImageConstant";

const SetInit = (props) => {
  const data = props.data;
  return (
    <>
      <Col className="SellingItem">
        <img alt="" className="SellingItemImg" src={data.img} />
        <span className="SellItemType">{data.Type}</span>
        <span className="SellItemText">
          {
              data.Text
          }
        </span>
      </Col>
    </>
  );
};

const SellingItem = (props) => {
  const data = props.data;
  return (
    <>
    <Row className="SellingItemRow" justify="center" align="middle">
      {data.map((item, index) => {
          return <SetInit data={item} />;
        })}
    </Row>
    </>
  );
};

export default SellingItem;
