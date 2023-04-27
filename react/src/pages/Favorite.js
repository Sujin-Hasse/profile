import React from "react";

const Favorite = () => {
  return (
    <div>
      <div class="favorite">
        <h2>
          제가 <span class="pink">좋아하는</span> 것은
        </h2>
      </div>
      <div class="favorite-contents">
        <div class="favorite-baseball">
          <img
            class="favorite-img"
            src="img/img_fav_bsb.png"
            ait="img-baseball"
          ></img>
          <h3>야구장가기</h3>
          <div class="square1"></div>
        </div>

        <div class="favorite-tennis">
          <img
            class="favorite-img"
            src="img/img_fav_ten.png"
            ait="img-tennis"
          ></img>
          <h3>테니스치기</h3>
          <div class="square1"></div>
        </div>

        <div class="favorite-taekwondo">
          <img
            class="favorite-img"
            src="img/img_fav_tkd.png"
            ait="img-taekwondo"
          ></img>
          <h3>태권도품새</h3>
          <div class="square1"></div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
