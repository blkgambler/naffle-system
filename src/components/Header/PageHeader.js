import React, { createRef } from "react";
import "./PageHeader.css";
import { Row, Input } from "antd";
import { SharedImage } from "constant/ImageConstant";
import { Search, PersonFill, Wallet2, List } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import { AUTH_PREFIX_PATH, PUBLIC_PREFIX_PATH } from "config/AppConfig";
import WalletMenu from "views/public-views/home/component/WalletMenu";

// const options = [
//   { value: 'Burns Bay Road' },
//   { value: 'Downing Street' },
//   { value: 'Wall Street' },
// ];
const MenuShow = () => {
  document.querySelector(".HeaderTool").classList.toggle("MenuActive");
};
const SearchShow = () => {
  document.querySelector(".SearchBar").classList.toggle("SearchActive");
};

const PageHeader = (props) => {
  const theme = props.theme;
  const Wallet = createRef();
  const WalletMenuOpen = () =>{
    Wallet.current.WalletShow()
  }
  return (
    <>
      <header className={"GlobalHeader " + theme}>
        <Row className="HeaderRow" align="middle">
          <a href="." className="SearchShow">
            <Search
              onClick={SearchShow}
              color={theme ? "#14c0f1" : "#fdfe40"}
            />
          </a>
          <span className="Expand"></span>
          <Row className="HeaderPrev">
            <Link to="/">
              <img
              alt=""
                src={theme ? SharedImage.BlueLogo : SharedImage.Logo}
                className="PageLogo"
              />
            </Link>
            <Row className="WalletStatus" align="middle">
              <div className="CircleSpin"></div>
              <div className="WalletText">No Wallet</div>
            </Row>
          </Row>
          <Row className="SearchBar" justify="center">
            <Input
              className={"SearchInput " + theme + "In"}
              prefix={<Search />}
              placeholder="Search items collections and accounts"
            />
          </Row>
          <Row className={"HeaderTool "+theme} align="middle">
            <Link className="ToolItem ExploreItem" to={`/${PUBLIC_PREFIX_PATH}/explore`}>
              Explore
            </Link>
            <Link to={`/${PUBLIC_PREFIX_PATH}/sell`} className="ToolItem SellItem">Sell</Link>
            <a href="." className="ToolItem">
            <Link to={`/${AUTH_PREFIX_PATH}/profile`}>
              <PersonFill
                color={theme ? "black" : "#fdfe40"}
                className="PersonItem"
              />
              </Link>
            </a>
            <span className="ToolItem" onClick={WalletMenuOpen}>
              <Wallet2
                color={theme ? "black" : "#fdfe40"}
                className="PersonItem"
              />
            </span>
          </Row>
          <span className="Expand"></span>
          <div className="MenuShow" onClick={MenuShow}>
            <List color={theme ? "#14c0f1" : "#fdfe40"} />
          </div>
        </Row>
      </header>
      <WalletMenu ref={Wallet}/>
    </>
  );
};

export default PageHeader;
