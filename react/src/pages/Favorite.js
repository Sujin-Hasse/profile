import React from "react";

const Favorite = () => {
  return (
    <div>
      <div className="favorite">
        <h2>
          제가 <span className="pink">좋아하는</span> 것은
        </h2>
      </div>
      <div className="favorite-contents">
        <div className="favorite-baseball">
          <img
            className="favorite-img"
            src="img/img_fav_bsb.png"
            alt="img-baseball"
          ></img>
          <h3>야구장가기</h3>
          <div className="square1"></div>
        </div>

        <div className="favorite-tennis">
          <img
            className="favorite-img"
            src="img/img_fav_ten.png"
            alt="img-tennis"
          ></img>
          <h3>테니스치기</h3>
          <div className="square1"></div>
        </div>

        <div className="favorite-taekwondo">
          <img
            className="favorite-img"
            src="img/img_fav_tkd.png"
            alt="img-taekwondo"
          ></img>
          <h3>태권도품새</h3>
          <div className="square1"></div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
