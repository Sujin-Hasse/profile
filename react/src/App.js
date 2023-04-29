import React, { useState, createContext, useContext } from "react";
import WrapInfo from "./pages/WrapInfo";
import Favorite from "./pages/Favorite";
import "./Main.css";
import Login from "./pages/Login";
import { UserInfo } from "./pages/UserInfo";

const App = () => {
  //전역변수 만들어서 우선 폴스로 해놓고(hook은 컴포넌트 안에서 사용해야 하므로 이 안에서 만들어야 함)
  //그다음에 렌더링 될 때 로그인안되어있으면 로컬스토리지에 유저 정보 저장

  const [isLogin, setisLogin] = useState(false);

  return (
    <>
      {isLogin ? (
        <div>
          <WrapInfo />
          <Favorite />
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </>
  );
};

export default App;
