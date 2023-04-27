import React from "react";
import Profile from "./Profile";
import ProfileContents from "./ProfileContents";

const WrapProfile = () => {
  return (
    <div className="wrap-profile">
      <Profile />
      <ProfileContents />
    </div>
  );
};

export default WrapProfile;
