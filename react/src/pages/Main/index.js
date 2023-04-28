import Favorite from "./Favorite";
import Info from "./Info";
import Profile from "./Profile";
import Data from "../../Data.json";

const Main = () => {
  return (
    <div>
      <div className="info">
        <Info data={Data} />
        <Profile data={Data} />
      </div>
      <Favorite data={Data} />
    </div>
  );
};

export default Main;
