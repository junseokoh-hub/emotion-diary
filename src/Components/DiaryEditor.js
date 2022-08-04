import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MyHeader from "./MyHeader";
import MyButton from "./MyButton";
import EmotionItem from "./EmotionItem";
import { DiaryDispatchContext } from "../App";
import { getStringDate } from "../util/date";
import { emotionList } from "../util/emotion";

const EditorContainer = styled.div`
  section {
    margin-bottom: 40px;
  }
  h4 {
    margin: 29px 0;
    font-size: 22px;
    font-weight: bold;
  }
`;

const InputBox = styled.div``;

const InputDate = styled.input`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #ececec;
  font-family: "Nanum Pen Script";
  font-size: 20px;
  cursor: pointer;
`;

const EmotionListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 2%;
`;

const Textarea = styled.textarea`
  padding: 20px;
  width: 100%;
  min-height: 200px;
  resize: vertical;
  border: none;
  border-radius: 5px;
  font-family: "Nanum Pen Script";
  font-size: 20px;
  background-color: #ececec;
`;

const ControlBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function DiaryEditor({ isEdit, originData }) {
  const contentRef = useRef();
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState(3);
  const [date, setDate] = useState(getStringDate(new Date()));
  const navigate = useNavigate();
  const { onCreate, onEdit, onRemove } = useContext(DiaryDispatchContext);

  const handleClickEmote = useCallback((emotion) => {
    setEmotion(emotion);
  }, []);

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (
      window.confirm(
        isEdit ? "일기를 수정하시겠습니까?" : "새로운 일기를 작성하시겠습니까?",
      )
    ) {
      if (!isEdit) {
        onCreate(date, content, emotion);
      } else {
        onEdit(originData.id, date, content, emotion);
      }
    }
    navigate("/", { replace: true });
  };

  const handleRemove = () => {
    if (window.confirm(`정말 삭제하시겠습니까?`)) {
      onRemove(originData.id);
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <EditorContainer>
      <MyHeader
        headText={isEdit ? "일기 수정하기" : "새 일기쓰기"}
        leftChild={
          <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
        }
        rightChlid={
          isEdit && (
            <MyButton
              onClick={handleRemove}
              text={"삭제하기"}
              type={"negative"}
            />
          )
        }
      />
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <InputBox>
            <InputDate
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
          </InputBox>
        </section>
        <section>
          <h4>오늘의 감정</h4>
          <EmotionListWrapper>
            {emotionList.map((it) => (
              <EmotionItem
                key={it.emotion_id}
                {...it}
                onClick={handleClickEmote}
                isSelected={it.emotion_id === emotion}
              />
            ))}
          </EmotionListWrapper>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div>
            <Textarea
              placeholder={"오늘은 어땠나요?"}
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </section>
        <section>
          <ControlBox>
            <MyButton text={"취소하기"} onClick={() => navigate(-1)} />
            <MyButton
              text={"작성완료"}
              type={"positive"}
              onClick={handleSubmit}
            />
          </ControlBox>
        </section>
      </div>
    </EditorContainer>
  );
}

export default DiaryEditor;
