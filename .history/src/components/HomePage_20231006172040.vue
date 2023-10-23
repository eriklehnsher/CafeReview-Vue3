<template>
  <div class="homepage">
    <div class="banner">
      <div class="banner-flex d-flex">
        <div class="">
          <img
            src="../assets/images/images-slider1.png"
            class="banner-bg d-block w-100"
            alt="..."
          />
          <!-- <div
            id=""
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="../assets/images/images-slider1.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/images/images-slider2.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/images/images-slider3.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/images/images-slider4.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div> -->
        </div>
        <div class="promo">
          <div class="promo-1">
            <img class="promo-img" src="../assets/images/promo1.png" alt="" />
            <p class="promo-text">
              Top quán cafe được đánh giá cao nhất trong tuần này?
            </p>
          </div>
          <div class="promo-1 mt-4">
            <img class="promo-img" src="../assets/images/promo2.png" alt="" />
            <p class="promo-text">
              Top 14 Quán ăn sinh viên ngon rẻ, nổi tiếng nhất ở Hà Nội
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="search-box"></div>
    <div class="top-cafe"></div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homepage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 background: linear-gradient(to bottom, #fff 65%, #d9d9d9 50%);
}

.banner {
  padding: 100px 0px 100px;
  height: 100vh;
}

.promo-1:hover {
  cursor: pointer;
}
.promo-text {
  width: 80%;
  height: 100%;
  color: black;
  font-size: 14px;
  font-family: inherit;
  font-weight: 300;
}
.carousel {
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #000;
}
.banner-flex {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
.banner-bg {
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #000;
}
.carousel-inner {
  border-radius: 10px;
}
.search-box {
 width: 60%;
 height: 200px;
  border-radius: 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  border-left: 1px solid rgba(0, 0, 0, 0.5);
  background: #fff;
  box-shadow: 2px 6px 4px 0px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}
.top-cafe {
  background-color: #d9d9d9;
}
</style>
