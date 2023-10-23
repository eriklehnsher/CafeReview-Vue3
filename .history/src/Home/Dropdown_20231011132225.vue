<template>
  <div class="group__input-data">
    <select name="cities" id="" v-for="item in cities" v-bind:key="item" >{ {item }}</select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: {
        detail: "",
        city: "hanoi",
        district: "",
        ward: "",
      },
      cities: ["Hà Nội"],
      districts: ["Hai Bà Trưng", "Ba Đình", "Bắc Từ Liên"],
      wards: {
        "hai ba trung": [
          "Bách Khoa",
          "Bạch Mai",
          "Nguyễn Du",
          "Bạch Đằng",
          "Phạm Đình Hổ",
          "Lê Đại Hành",
          "Đồng Nhân",
          "Phố Huế",
          "Thanh Nhàn",
        ],
        "ba dinh": ["Trúc Bạch", "Liễu Giai", "Quán Thánh"],
        "bac tu liem": ["Thượng Cát", " Liên Mạc", "Đông Ngạc"],
      },
    };
  },
};
</script>

<style></style>
