<template>
  <div class="top-stores">
    <H1 class="header-title"
      >Những quán ăn và cafe đang hot tại thành phố bạn</H1
    >
    <div class="list--stores">
      <!-- store-item -->
      <div class="list--stores__store">
        <img src="../assets/images/cafeStore1.jpg" alt="" />
        <h2 class="list--stores__store--name">Joie</h2>
        <div class="list--stores__store--location d-flex">
          <i class="fa-solid fa-location-dot"></i>
          <p>116C3, Hoàng Ngọc Phách, Đống Đa, Hà Nội.</p>
        </div>
        <div
          class="Line5"
          style="width: 285px; height: 0px; border: 1px #beb6b6 solid"
        ></div>
        <div class="list--stores__store--price">
          <p>Giá: 40.000đ - 65.000đ</p>
          <div class="d-flex">
            <i class="fa-regular fa-star"></i>
            <p>7/10</p>
          </div>
        </div>
      </div>
      <!-- store item -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
.header-title {
  font-size: 30px;
  color: #0c3f6f;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  font-family: inherit;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.list--stores__store img {
  width: 290px;
  height: 257px;
  flex-shrink: 0;
  border-radius: 8px;
}

.list--stores__store--location p {
  color: #000;
  font-family: inherit;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.list--stores__store--price p {
  color: #000;
  font-family: inherit;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
