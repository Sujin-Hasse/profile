import React from "react";

const ProfileContents = (props) => {
  const { birthday, major, mbti, social } = props.data;
  return (
    <div className="profile-contents">
      <div className="birth">
        <p>Birth</p>
        <p>{birthday}</p>
      </div>
      <div className="major">
        <p>Major</p>
        <p>{major}</p>
      </div>
      <div className="mbti">
        <p>MBTI</p>
        <p>{mbti}</p>
      </div>
      <div className="social-media">
        <p>Social Media</p>
        <p>{social}</p>
      </div>
    </div>
  );
};

export default ProfileContents;
