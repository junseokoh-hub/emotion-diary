import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import DiaryItem from "./DiaryItem";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const filterOptionList = [
  { value: "all", name: "전부 다" },
  { value: "good", name: "좋은 감정만" },
  { value: "bad", name: "안좋은 감정만" },
];

const SelectMenu = styled.select`
  margin-right: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #ececec;
  cursor: pointer;
  font-family: ${(props) => props.theme.NanumFont};
  font-size: 18px;
`;

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <SelectMenu value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList?.map((it, index) => (
        <option value={it.value} key={index}>
          {it.name}
        </option>
      ))}
    </SelectMenu>
  );
};

const MenuWrapper = styled.div`
  margin: 20px 0 30px 0;
  display: flex;
  justify-content: space-between;
`;

const Col = styled.div`
  &:nth-child(2) {
    flex-grow: 1;
    button {
      width: 100%;
    }
  }
`;

function DiaryList({ diaryList }) {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");

  const getProcessedDiaryList = () => {
    const filterCallBack = (item) => {
      if (filter === "good") {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(diaryList));

    const filteredList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));

    const sortedList = filteredList.sort(compare);
    return sortedList;
  };

  return (
    <div>
      <MenuWrapper>
        <Col>
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </Col>
        <Col>
          <MyButton
            type={"positive"}
            text={"새 일기 쓰기"}
            onClick={() => navigate("/new")}
          />
        </Col>
      </MenuWrapper>
      {getProcessedDiaryList()?.map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  );
}

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
