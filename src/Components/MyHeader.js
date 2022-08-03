import React from "react";
import styled from "styled-components";

const Header = styled.header`
  padding: 20px 0;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  align-items: center;
  div {
    display: flex;
  }
  .head_text {
    width: 50%;
    font-size: 25px;
    justify-content: center;
  }
  .head_btn_left {
    width: 25%;
    justify-content: start;
  }
  .head_btn_right {
    width: 25%;
    justify-content: end;
  }
`;

function MyHeader({ headText, leftChild, rightChlid }) {
  return (
    <Header>
      <div className="head_btn_left">{leftChild}</div>
      <div className="head_text">{headText}</div>
      <div className="head_btn_right">{rightChlid}</div>
    </Header>
  );
}

export default MyHeader;
