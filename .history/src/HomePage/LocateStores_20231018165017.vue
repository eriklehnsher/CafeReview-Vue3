<template>
  <div class="locate d-flex flex-column">
    <h2>Địa Điểm Nổi Bật</h2>
    <div class="homepage__location d-flex justify-content-center gap-2">
      <div class="homepage__location__hanoi d-flex flex-column-reverse">
        <p>+ 1500 địa điểm</p>
        <h2>Hà Nội</h2>
      </div>
      <div class="homepage__location__danang d-flex flex-column-reverse">
        <p>+ 1500 địa điểm</p>
        <h2>Đà Nẵng</h2>
      </div>
      <div class="homepage__location__dalat d-flex flex-column-reverse">
        <p>+ 1500 địa điểm</p>
        <h2>Đà Lạt</h2>
      </div>
      <div class="homepage__location__hcm d-flex flex-column-reverse">
        <p>+ 1500 địa điểm</p>
        <h2>Hồ Chí Minh</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Ingrid+Darling&display=swap");

.locate {
  width: 100%;
  padding: 50px 10%;
  margin: 0;
  height: auto;
  margin-top: 10px;
  background-color: #ffffff;
}
.locate h2 {
  color: #0c3f6f;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  font-family: inherit;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
 
}

.homepage__location__hanoi {
  border-radius: 10px;
  width: 100%;
  height: 400px;
  background-image: url("../assets/images/HaNoi_v2.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  padding: 20px;
}
.homepage__location__hanoi:hover {
  cursor: pointer;
  border-radius: 15px;
  background: linear-gradient(27deg, #000 5.52%, rgba(0, 0, 0, 0) 58.05%),
    url("../assets/images/HaNoi_v2.jpg"), lightgray 50% / cover no-repeat;
  background-size: 100%;
  background-repeat: no-repeat;
}

.homepage__location__danang {
  border-radius: 10px;
  width: 100%;
  height: 400px;
  background-image: url("../assets/images/DaNang_v2.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  padding: 20px;
}
.homepage__location__danang:hover {
  cursor: pointer;
  border-radius: 15px;
  background: linear-gradient(27deg, #000 5.52%, rgba(0, 0, 0, 0) 58.05%),
    url("../assets/images/DaNang_v2.jpg"), lightgray 50% / cover no-repeat;
  background-size: 100%;
  background-repeat: no-repeat;
}
.homepage__location__dalat {
  border-radius: 10px;
  width: 100%;
  height: 400px;
  background-image: url("../assets/images/DaLat_v2.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  padding: 20px;
}
.homepage__location__dalat:hover {
  cursor: pointer;
  border-radius: 15px;
  background: linear-gradient(27deg, #000 5.52%, rgba(0, 0, 0, 0) 58.05%),
    url("../assets/images/DaLat_v2.jpg"), lightgray 50% / cover no-repeat;
  background-size: 100%;
  background-repeat: no-repeat;
}
.homepage__location__hcm {
  border-radius: 10px;
  width: 100%;
  height: 400px;
  background-image: url("../assets/images/HoChiMinh_v2.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  padding: 20px;
}
.homepage__location__hcm:hover {
  cursor: pointer;
  border-radius: 15px;
  background: linear-gradient(27deg, #000 5.52%, rgba(0, 0, 0, 0) 58.05%),
    url("../assets/images/HoChiMinh_v2.jpg"), lightgray 50% / cover no-repeat;
  background-size: 100%;
  background-repeat: no-repeat;
}

.homepage__location h2 {
  margin-left: 15px;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.homepage__location p {
  color: #fff;
  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
