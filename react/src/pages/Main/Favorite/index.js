import React from "react";
import FavoriteItem from "./FavoriteItem";

const Favorite = (props) => {
  const { favorite } = props.data;
  return (
    <>
      <div className="favorite">
        <h2>
          제가 <span className="pink">좋아하는</span> 것은
        </h2>
      </div>
      <div className="favorite-contents">
        {favorite.map((data, index) => (
          <FavoriteItem data={data} key={index} />
        ))}
      </div>
    </>
  );
};

export default Favorite;
