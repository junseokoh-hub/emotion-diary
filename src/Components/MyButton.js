import React from "react";
import styled from "styled-components";

const Wrapper = styled.span`
  .positive {
    background-color: #64c964;
    color: white;
  }
  .negative {
    background-color: #fd565f;
    color: white;
  }
`;

const Btn = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  white-space: nowrap;
  font-family: "Nanum Pen Script", cursive;
  background-color: #ececec;
  color: black;
  cursor: pointer;
`;

function MyButton({ text, type, onClick }) {
  return (
    <Wrapper>
      <Btn className={type} onClick={onClick}>
        {text}
      </Btn>
    </Wrapper>
  );
}

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
