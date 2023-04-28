import React from "react";

const FavoriteItem = (props) => {
  const { title, url } = props.data;
  return (
    <div className="favorite-baseball">
      <img className="favorite-img" src={url} alt={title} />
      <h3>{title}</h3>
      <div className="square1" />
    </div>
  );
};

export default FavoriteItem;
