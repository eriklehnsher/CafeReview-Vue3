<template>
  <div class="homepage">
    <!-- banner section -->
    <div class="set-bg">
      <div class="homepage__banner">
        <div class="banner-flex">
          <div class="">
            <!-- <img
            src="../assets/images/images-slider1.png"
            class="banner-bg d-block w-100"
            alt="..."
          /> -->
            <div id="" class="carousel slide" data-bs-ride="carousel">
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
            </div>
          </div>
          <div class="promo">
            <div class="promo-1 d-flex flex-column">
              <img class="promo-img" src="../assets/images/promo1.png" alt="" />
              <p class="promo-text">
                Top quán cafe được đánh giá cao nhất trong tuần này?
              </p>
            </div>
            <div class="promo-1 d-flex flex-column">
              <img class="promo-img" src="../assets/images/promo2.png" alt="" />
              <p class="promo-text">
                Top 14 Quán ăn sinh viên ngon rẻ, nổi tiếng nhất ở Hà Nội
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- SearchBox Section -->
      <div class="d-flex flex-column align-items-center homepage__searchBox">
        <h2>Đi đâu chill?</h2>
        <SearchBox />
      </div>
    </div>

    <!-- Top Cafe-stores section -->
    <ListStores />

    <!-- Location section -->
    <LocateStores />

    <!-- PROMOS section -->
    <Promos />
    <div class="homepage__about mt-40px">
      <div class="homepage__about--content container ntent d-flex justify-content-center">
        <div class="homepage__about__content d-flex flex-column align-items-center justify-content-center ">
          <img src="../assets/logo.png" alt="">
          <h2 class="header-title">Bạn muốn biết thêm về chúng tớ?</h2>
          <p>
            "Duyệt hàng trăm quán cafe và nhà hàng, tìm điểm đặt bàn trước dễ<br>
            dàng với WeEat - Cộng đồng thực khách yêu ẩm thực của bạn."
          </p>
          <button>Tìm hiểu thêm</button>
        </div>
        <img src="../assets/images/about-bg.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from '@/HomePage/SearchBox.vue'
import ListStores from '@/HomePage/ListStores'
import LocateStores from '@/HomePage/LocateStores.vue'
import Promos from '@/HomePage/Promos'
export default {
  components: {
    SearchBox,
    ListStores,
    LocateStores,
    Promos
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
