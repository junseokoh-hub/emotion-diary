import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const mode = searchParams.get("mode");
  console.log(id, mode);

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지 입니다.</p>
      <button onClick={() => setSearchParams({ who: "writer" })}>
        QS 바꾸기
      </button>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default Edit;
