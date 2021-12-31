import React from "react";
import "../css/ProfileCardList.css";
import { Row } from "antd";

const ProfileCardList = () => {
  return (
    <>
      <Row className="SingleCardTableRow ProfilePriceTableRow">
        <Row className="ListCaption">TRANSACTION HISTORY</Row>
        <Row className="CoverTable">
          <table>
            <thead className="OverThead">
              <tr>
                <th>Name</th>
                <th>Tickets Bought</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>User12591</td>
                <td>3</td>
                <td>May 3, 2021</td>
              </tr>
              <tr>
                <td>User12224</td>
                <td>3</td>
                <td>May 3, 2021</td>
              </tr>
              <tr>
                <td>User15151</td>
                <td>3</td>
                <td>May 3, 2021</td>
              </tr>
              <tr>
                <td>User1326</td>
                <td>3</td>
                <td>May 3, 2021</td>
              </tr>
              <tr>
                <td>User12156</td>
                <td>3</td>
                <td>May 3, 2021</td>
              </tr>
              <tr>
                <td>User631</td>
                <td>3</td>
                <td>May 3, 2021</td>
              </tr>
              <tr>
                <td>User12591</td>
                <td>3</td>
                <td>May 3, 2021</td>
              </tr>
              <tr>
                <td>User12591</td>
                <td>3</td>
                <td>May 3, 2021</td>
              </tr>
              <tr>
                <td>User12591</td>
                <td>3</td>
                <td>May 3, 2021</td>
              </tr>
              <tr>
                <td>User12591</td>
                <td>3</td>
                <td>May 3, 2021</td>
              </tr>
              <tr>
                <td>User12591</td>
                <td>3</td>
                <td>May 3, 2021</td>
              </tr>
              <tr>
                <td>User12591</td>
                <td>3</td>
                <td>May 3, 2021</td>
              </tr>
              <tr>
                <td>User12591</td>
                <td>3</td>
                <td>May 3, 2021</td>
              </tr>
            </tbody>
          </table>
        </Row>
      </Row>
    </>
  );
};

export default ProfileCardList;
