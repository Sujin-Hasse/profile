import React from "react";

const Info = (props) => {
  const { name, major, mbti, birth } = props.data;
  return (
    <>
      <h3>{name}</h3>
      <div class="profile-contents">
        <div class="birth">
          <p>Birth</p>
          <p>{birth}</p>
        </div>
        <div class="major">
          <p>Major</p>
          <p>{major}</p>
        </div>
        <div class="mbti">
          <p>MBTI</p>
          <p>{mbti}</p>
        </div>
        <div class="social-media">
          <p>Social Media</p>
          <p>{socialmedia}</p>
        </div>
      </div>
    </>
  );
};

export default Info;
