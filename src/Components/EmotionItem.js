import React from "react";
import styled from "styled-components";

const EmotionWrapper = styled.div`
  .offEmotion {
    background-color: #ececec;
  }
  .onEmotion_1 {
    background-color: #64c964;
    color: white;
  }
  .onEmotion_2 {
    background-color: #9dd772;
    color: white;
  }
  .onEmotion_3 {
    background-color: #fdce17;
    color: white;
  }
  .onEmotion_4 {
    background-color: #fd8446;
    color: white;
  }
  .onEmotion_5 {
    background-color: #fd565f;
    color: white;
  }
`;

const EmotionItemContainer = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  img {
    margin-bottom: 10px;
    width: 50%;
  }
  span {
    font-size: 18px;
  }
`;

function EmotionItem({
  emotion_id,
  emotion_img,
  emotion_description,
  onClick,
  isSelected,
}) {
  return (
    <EmotionWrapper>
      <EmotionItemContainer
        className={isSelected ? `onEmotion_${emotion_id}` : "offEmotion"}
        onClick={() => onClick(emotion_id)}
      >
        <img src={emotion_img} alt={emotion_description} />
        <span>{emotion_description}</span>
      </EmotionItemContainer>
    </EmotionWrapper>
  );
}

export default React.memo(EmotionItem);
