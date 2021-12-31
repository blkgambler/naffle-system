import React from "react";
import "../css/NftPriceCard.css";
import { Card, Row, Col} from "antd";
// import { ExploreImage } from "constant/ImageConstant";
import { Link } from "react-router-dom";
import { PUBLIC_PREFIX_PATH } from "config/AppConfig";

// const { Meta } = Card;

const SetInit = (props) => {
    const data = props.data;
    return(
        <>
        <Link to={`/${PUBLIC_PREFIX_PATH}/explore/singleCard`}>
<Card
        hoverable
        style={{ width: 380 }}
        className="NftPriceCard"
        cover={
          <img
            alt="example"
            className="NftPriceImg"
            src={data.img}
          />
        }
      >
          <Row className="NftPriceDes" align="top">
            <Col className="NftPriceDesText">
                <span className="NftPriceTypeBig">{data.title}</span>
                <span className="NftPriceTypeSmall">{data.title}</span>
            </Col>
            <span className="Split"></span>
            <img alt="" src={data.mark} className="NftPriceMark" />
          </Row>
          <Row className="TicketRow">
              <Col className="TicketsAmountInfo">
                <span className="TicketNumber">{data.amount}</span>
                <span className="TicketAmount">/230 Tickets</span>
              </Col>
              <span className="Split"></span>
              <Col>
                <span className="PriceCaption">Ticket price</span>
                <Row align="middle">
                    <img alt="" className="PriceImg" src={data.priceMark} />
                    <span className="Price">{data.price}</span>
                </Row>
              </Col>
          </Row>
          <Row justify="center" className="DayRow">
            <span className="DelayDay">5 Days remaining</span>
          </Row>
      </Card>
      </Link>

        </>
    )
}

const NftPriceCard = (props) => {
    const data = props.data;
  return (
    <>
      {
          data.map((item,index) => {
              return(
                  <SetInit data={item} />
              )
          })
      }
    </>
  );
};

export default NftPriceCard;
