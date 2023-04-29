import React, { useEffect, useState } from "react";
import "../Login.css"; //react는 css파일을 자동완성 안시켜쥼

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleid = (e) => {
    setId(e.target.value);
  };

  const handlepassword = (i) => {
    setPassword(i.target.value);
  };

  const handleclick = (e) => {
    e.preventDefault();
    // setId
    // setPassword
  };

  useEffect(() => {
    console.log("id랑 pw는 이렇습니다", id, password);
  }, [id, password]);

  return (
    <div className="wrapper_box">
      <h2>LOG IN</h2>
      <form className="login_form" onSubmit={handleclick}>
        <input
          type="text"
          onChange={handleid}
          value={id}
          className="login_input"
          placeholder="ID"
        />
        <input
          placeholder="Password"
          onChange={handlepassword}
          value={password}
          type="Password"
          className="login_input"
        />
        <button type="submit" className="login_btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
