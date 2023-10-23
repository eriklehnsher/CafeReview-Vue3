<template>
  <div class="homepage">
    <div class="banner">
      <div class="row">
        <div class="col-sm-8">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../assets/images/cafeStore1.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="../assets/images/cafeStore2.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="../assets/images/cafeStore3.jpg" class="d-block w-100" alt="..." />
              </div>
               <div class="carousel-item">
                <img src="../assets/images/cafeStore4.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 promo">
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
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hompage {
  margin-top: 100px;
  background-color: rgb(112, 112, 23);
}
promo-1:hover {
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
</style>
