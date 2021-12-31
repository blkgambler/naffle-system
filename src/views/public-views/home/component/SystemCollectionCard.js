import React from "react";
import { Card, Row, Col } from "antd";
import "../css/SystemCollectionCard.css";

const SetInit = (props) => {
  const data = props.data;
  return (
    <Card
      style={{ width: 340 }}
      className="SystemCollectionCard"
      cover={<img alt="" className="SystemCollectionImg" src={data.img} />}
    >
        <img alt="" className="CenterCircle" src={data.img} />
      
      <Col className="SystemCollectionDes">
        <span className="SystemDesTitle">{data.Title}</span>
        <span className="SystemDesLowPrice">{data.Price}</span>
        <span className="SystemDesItemCount">{data.Count}</span>
        {/* <a href="." className="SystemCollectionView">
          VIEW NAFFLE
        </a> */}
      </Col>
    </Card>
  );
};
const SystemCollectionCard = (props) => {
  const data = props.data;
  return (
    <>
      <Row className="SystemCollectionRowCover" justify="center">
        <Row className="SystemCollectionRow">
          {data.map((item, index) => {
            return <SetInit data={item} />;
          })}
        </Row>
      </Row>
    </>
  );
};

export default SystemCollectionCard;
