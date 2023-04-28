import React from "react";

const ProfileInfo = (props) => {
  const { name } = props.data;
  return (
    <div className="profile-box">
      <div className="profile-img">
        <img src="img/img_info.png" alt="img-info"></img>
      </div>
      <div className="name">
        <h3>{name}</h3>
        <div className="square1"></div>
      </div>
    </div>
  );
};

export default ProfileInfo;
