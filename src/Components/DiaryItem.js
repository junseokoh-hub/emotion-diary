import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MyButton from "./MyButton";

const ItemContainer = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  justify-content: space-between;
  .emotion1 {
    background-color: #64c964;
  }
  .emotion2 {
    background-color: #9dd772;
  }
  .emotion3 {
    background-color: #fdce17;
  }
  .emotion4 {
    background-color: #fd8446;
  }
  .emotion5 {
    background-color: #fd565f;
  }
`;

const EmotionWrapper = styled.div`
  min-width: 120px;
  height: 80px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  img {
    width: 50%;
  }
`;

const InfoWrapper = styled.div`
  margin-left: 20px;
  flex-grow: 1;
  cursor: pointer;
  .diary_date {
    margin-bottom: 5px;
    font-size: 25px;
    font-weight: bold;
  }
  .diary_content_preview {
    font-size: 18px;
  }
`;

const BtnWrapper = styled.div`
  min-width: 70px;
`;

function DiaryItem({ id, emotion, content, date }) {
  const navigate = useNavigate();

  const strDate = new Date(parseInt(date)).toLocaleDateString();

  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <ItemContainer>
      <EmotionWrapper onClick={goDetail} className={`emotion${emotion}`}>
        <img
          src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}
          alt={`emotion-${emotion}`}
        />
      </EmotionWrapper>
      <InfoWrapper onClick={goDetail}>
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{content.slice(0, 25)}</div>
      </InfoWrapper>
      <BtnWrapper>
        <MyButton onClick={goEdit} text={"수정하기"} />
      </BtnWrapper>
    </ItemContainer>
  );
}

export default React.memo(DiaryItem);
