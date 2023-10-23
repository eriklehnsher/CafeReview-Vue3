<template>
  <div class="promos d-flex">
    <h1 class="promos__title">Các Chương trình khuyến mại</h1>
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
</template>
<script>
export default {};
</script>
<style>
.promos {
  background-color: #fff;
}
.promos__title {
  color: #0c3f6f;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  font-family: inherit;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.promos__items {
  display: flex;
  flex-direction: row-reverse;
  background-image: url("../assets/images/promo1.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  padding: 20px;
  width: 355px;
  height: 274px;
  flex-shrink: 0;
}
.promos__items p {
  color: #fff;
  font-family: inherit;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.promos__items h2 {
  color: #f4b30c;
  text-shadow: 0px 4px 4px rgba(244, 179, 12, 0.4);
  font-family: inherit;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
