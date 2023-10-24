<template>
  <div class="homepage container">
    <!-- banner section -->
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
    <!-- Top Cafe-stores section -->
    <ListStores class="homepage__topCafe" />

    <!-- Location section -->
    <LocateStores class="homepage__LocateStore" />

    <!-- PROMOS section -->
    <div class="promos d-flex flex-column align-items-center">
      <h1 class="promos__title">Các Chương trình khuyến mại</h1>
      <div class="d-flex gap-3 justify-content-between">
        <div class="promos__items">
          <p>chương trình khuyến mãi giảm giá đồ uống từ 35-55k</p>
          <h2>Chỉ áp dụng khi là thành viên</h2>
        </div>
        <div class="promos__items">
          <p>chương trình khuyến mãi giảm giá đồ uống từ 35-55k</p>
          <h2>Chỉ áp dụng khi là thành viên</h2>
        </div>
        <div class="promos__items">
          <p>chương trình khuyến mãi giảm giá đồ uống từ 35-55k</p>
          <h2>Chỉ áp dụng khi là thành viên</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from "@/HomePage/SearchBox.vue";
import ListStores from "@/HomePage/ListStores";
import LocateStores from "@/HomePage/LocateStores.vue";
// import Promos from "@/HomePage/Promos";
export default {
  components: {
    SearchBox,
    ListStores,
    LocateStores,
    // Promos,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
