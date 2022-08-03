import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";
import MyButton from "../Components/MyButton";
import MyHeader from "../Components/MyHeader";
import { getStringDate } from "../util/date";
import { emotionList } from "../util/emotion";

const Article = styled.article``;

const Section = styled.section`
  margin-bottom: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h4 {
    font-size: 22px;
    font-weight: bold;
  }
  .img_wrapper_1 {
    background-color: #64c964;
  }
  .img_wrapper_2 {
    background-color: #9dd772;
  }
  .img_wrapper_3 {
    background-color: #fdce17;
  }
  .img_wrapper_4 {
    background-color: #fd8446;
  }
  .img_wrapper_5 {
    background-color: #fd565f;
  }
`;

const DiaryImgWrapper = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 5px;
  background-color: #ececec;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const EmotionDesc = styled.div`
  font-size: 25px;
  color: white;
`;

const ContentWrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  background-color: #ececec;
  word-break: keep-all;
  overflow-wrap: break-word;
  p {
    padding: 20px;
    text-align: left;
    font-size: 20px;
    font-family: "Yeon Sung";
    font-weight: 400;
    line-height: 2.5;
  }
`;

function Diary() {
  const [data, setData] = useState();
  const diaryList = useContext(DiaryStateContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id),
      );

      if (targetDiary) {
        setData(targetDiary);
      } else {
        alert("없는 일기입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div>Loading...</div>;
  } else {
    const curEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion),
    );

    return (
      <div>
        <MyHeader
          headText={`${getStringDate(new Date(data.date))} 기록`}
          leftChild={
            <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
          }
          rightChlid={
            <MyButton
              text={"수정하기"}
              onClick={() => navigate(`/edit/${data.id}`)}
            />
          }
        />
        <Article>
          <Section>
            <h4>오늘의 감정</h4>
            <DiaryImgWrapper className={`img_wrapper_${data.emotion}`}>
              <img
                src={curEmotionData.emotion_img}
                alt={curEmotionData.emotion_description}
              />
              <EmotionDesc>{curEmotionData.emotion_description}</EmotionDesc>
            </DiaryImgWrapper>
          </Section>
          <Section>
            <h4>오늘의 일기</h4>
            <ContentWrapper>
              <p>{data.content}</p>
            </ContentWrapper>
          </Section>
        </Article>
      </div>
    );
  }
}

export default Diary;
