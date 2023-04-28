import React from "react";
import ProfileInfo from "./ProfileInfo";
import ProfileContents from "./ProfileContents";

const Profile = (props) => {
  return (
    <div className="profile">
      <ProfileInfo data={props.data} />
      <ProfileContents data={props.data} />
    </div>
  );
};

export default Profile;
