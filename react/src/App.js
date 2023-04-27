import React from "react";
import Info from "./pages/Info";
import Favorite from "./pages/Favorite";
import "./Main.css";
import CatchPraise from "./pages/CatchPraise";
import Profile from "./pages/Profile";
import ProfileContents from "./pages/ProfileContents";

const App = () => {
  return (
    <>
      <Info />
      <CatchPraise />
      <Profile />
      <ProfileContents />
      <Favorite />
    </>
  );
};

export default App;
