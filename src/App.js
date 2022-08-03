import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import GlobalStyle from "./GlobalStyle";
import MyButton from "./Components/MyButton";
import MyHeader from "./Components/MyHeader";

const Container = styled.div`
  padding: 0 20px;
  min-height: 100vh;

  @media (min-width: 650px) {
    width: 640px;
  }

  @media (max-width: 650px) {
    width: 90vw;
  }
`;

function App() {
  return (
    <>
      <Router>
        <Container>
          <MyHeader
            headText={"App"}
            leftChild={
              <MyButton text={"왼쪽 버튼"} onClick={() => alert("왼쪽 클릭")} />
            }
            rightChlid={
              <MyButton
                text={"오른쪽 버튼"}
                onClick={() => alert("오른쪽 클릭")}
              />
            }
          />
          <h2>App.js</h2>
          <MyButton
            text={"버튼"}
            onClick={() => alert("버튼 클릭")}
            type={"positive"}
          />
          <MyButton
            text={"버튼"}
            onClick={() => alert("버튼 클릭")}
            type={"negative"}
          />
          <MyButton text={"버튼"} onClick={() => alert("버튼 클릭")} />

          {/* <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} />
          <img src={process.env.PUBLIC_URL + `/assets/emotion2.png`} />
          <img src={process.env.PUBLIC_URL + `/assets/emotion3.png`} />
          <img src={process.env.PUBLIC_URL + `/assets/emotion4.png`} />
          <img src={process.env.PUBLIC_URL + `/assets/emotion5.png`} /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/diary/:id" element={<Diary />} />
          </Routes>
        </Container>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
