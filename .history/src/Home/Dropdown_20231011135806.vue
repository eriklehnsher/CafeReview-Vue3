<template>
  <div class="group__input-data">
    <div class="form-group">
      <label for=""></label>
      <select class="custom-select" name="" id="">
        <option value="" placeholder="Choose your district" selected></option>
        <option v-for="district in districts" v-bind:key="district.value">
          {{ districts.text }}
        </option>
      </select>
      <select>
        <option value="" placeholder="Choose your wards" selected></option>
        <option v-for="ward in Wards" v-bind:key="ward">
          {{ ward }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: [{ value: "hanoi", text: "Hà Nội" }],
      districts: [
        { value: "hai ba trung", text: "Hai Bà Trưng" },
        { value: "ba dinh", text: "Ba Đình" },
        { value: "bac tu liem", text: "Bắc Từ Liên" },
        { value: "hoan kiem", text: "Hoàn Kiếm" },
        { value: "tay ho", text: "Tây Hồ" },
        { value: "cau giay", text: "Cầu Giấy" },
      ],
      wards: {
        "hai ba trung": [
          { value: "bach khoa", text: "Bách Khoa" },
          { value: "bach mai", text: "Bạch Mai" },
          { value: "nguyen du", text: "Nguyễn Du" },
          { value: "bach dang", text: "Bạch Đằng" },
          { value: "pham dinh ho", text: "Phạm Đình Hổ" },
          { value: "le dai hanh", text: "Lê Đại Hành" },
          { value: "dong nhan", text: "Đồng Nhân" },
          { value: "pho hue", text: "Phố Huế" },
          { value: "thanh nhan", text: "Thanh Nhàn" },
        ],
        "ba dinh": [
          { value: "truc bạch", text: "Trúc Bạch" },
          { value: "lieu giai", text: "Liễu Giai" },
          { value: "quan thanh", text: "Quán Thánh" },
          { value: "doi can", text: "Đội Cấn" },
          { value: "kim ma", text: "Kim Mã" },
          { value: "giang vo", text: "Giảng Võ" },
          { value: "cong vi", text: "Cống Vị" },
          { value: "dien bien", text: "Điện Biên" },
        ],
        "bac tu liem": [
          { value: "thuong cat", text: "Thượng Cát" },
          { value: "lien mac", text: " Liên Mạc" },
          { value: "dong ngac", text: "Đông Ngạc" },
          { value: "duc thang", text: "Đức Thắng" },
          { value: "thuy phuong", text: "Thụy Phương" },
          { value: "tay tuu", text: "Tây Tựu" },
          { value: "xuan dinh", text: "Xuân Đỉnh" },
          { value: " xuan tao", text: " Xuân Tảo" },
          { value: "minh khai", text: "Minh Khai" },
        ],
        "hoan kiem": [
          { value: "phuc tan", text: "Phúc Tân" },
          { value: "dong xuan", text: "Đồng Xuân" },
          { value: "hang ma", text: "Hàng Mã" },
          { value: "hang buom", text: "Hàng Buồm" },
          { value: "hang dao", text: "Hàng Đào" },
          { value: "hang bo", text: "Hàng Bồ" },
          { value: "cua dong", text: "Cửa Đông" },
          { value: "ly thai to", text: "Lý Thái Tổ" },
        ],
        "tay ho": [
          { value: "phu thuong", text: "Phú Thượng" },
          { value: "nhat tan", text: "Nhật Tân" },
          { value: "tu lien", text: "Tứ Liên" },
          { value: "quang an", text: "Quảng An" },
          { value: "xuan la", text: "Xuân La" },
          { value: "yen phu", text: "Yên Phụ" },
          { value: "buoi", text: "Bưởi" },
          { value: "thuy khue", text: "Thụy Khuê" },
        ],
        "cau giay": [
          { value: "nghia do", text: "Nghĩa Đô" },
          { value: "nghia tan", text: "Nghĩa Tân" },
          { value: "mai dich", text: "Mai Dịch" },
          { value: "dich vong", text: "Dịch Vọng" },
          { value: "dich vong hau", text: "Dịch Vọng Hậu" },
          { value: "quan hoa", text: "Quan Hoa" },
          { value: "yen hoa", text: "Yên Hòa" },
          { value: "trung hoa", text: "Trung Hòa" },
        ],
      },
    };
  },
  props: ["property"],
  methods: {},
  computed: {
    filterWards() {
      return this.wards[this.address.district];
    },
  },
};
</script>

<style></style>
