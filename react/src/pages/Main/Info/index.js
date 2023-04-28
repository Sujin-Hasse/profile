import React from "react";

const Info = (props) => {
  const { intro } = props.data;
  return (
    <>
      <div className="catch-praise">
        <div className="title">
          <h2>
            <span className="pink">새로움과 도전</span>이 가득한
            <br />
            라이프를 추구합니다
          </h2>
        </div>
        <div className="subtitle">
          <p>{intro}</p>
        </div>
      </div>
    </>
  );
};

export default Info;
