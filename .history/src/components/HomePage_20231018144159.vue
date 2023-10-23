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

    <div class="search-box">
      <h2>Đi đâu chill?</h2>
      <SearchBox />
    </div>

    <ListStores class="top-cafe" />
  </div>
</template>

<script>
import SearchBox from "@/Home/SearchBox.vue";
import ListStores from "@/Home/ListStores";

export default {
  components: {
    SearchBox,
    ListStores,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Ingrid+Darling&display=swap");
.homepage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #fff 550px, #d9d9d9 10px);
}

.banner {
  padding: 50px 5%;
  margin: 0;
  height: auto;
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
.search-box h2 {
  font-family: "Ingrid Darling", cursive;
  text-align: center;
}

.top-cafe {
  margin-top: 100px;
  background-color: #d9d9d9;
  padding: 50px 5%;
}
</style>
