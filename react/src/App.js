import React from "react";
import Favorite from "./pages/Favorite";
import "./Main.css";
import Info from "./pages/Info";
import Profile from "./pages/Profile";
import ProfileContents from "./pages/ProfileContents";

const App = () => {
  return (
    <>
      <Info />
      <Profile />
      <ProfileContents />
      <Favorite />
    </>
  );
};

export default App;
