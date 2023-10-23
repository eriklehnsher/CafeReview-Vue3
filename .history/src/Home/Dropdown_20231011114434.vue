<template>
  <div class="group__input-data">
    <b-form-group class="" id="address" label-for="address">
      <label class="col-form-label"> Địa chỉ </label>
      <select v-model="selected" aria-placeholder="choose city">
        <!-- inline object literal -->
        <option v-for="item in districts" v-bind:key="item">{{ item }}</option>
      </select>
      <select v-model="selected" aria-placeholder="choose city">
        <!-- inline object literal -->
        <option
          v-for="item in filterWards"
          v-bind:key="item"
          :disabled="!address.district"
        >
          {{ item }}
        </option>
      </select>
      <div
        class="d-flex flex-row justify-content-between car-form__dettail--select mb-3"
      >
        <select
          class="car-form__detail--mapSelect"
          id="city"
          :options="cities"
          placeholder="Choose city"
        ></select>
        <b-form-select
          class="car-form__detail--mapSelect"
          id="district"
          v-model="address.district"
          @input="(e) => $emit('onChangeDistrict', e)"
          :options="districts"
          aria-placeholder="Choose district"
          required
        ></b-form-select>

        <b-form-select
          class="car-form__detail--mapSelect"
          id="ward"
          v-model="address.ward"
          @input="(e) => $emit('onChangeWard', e)"
          :options="filterWards"
          :disabled="!address.district"
          required
        ></b-form-select>
      </div>
    </b-form-group>
    <b-form-group>
      <label class="col-form-label"> Địa chỉ chi tiết </label>

      <b-form-input
        class="car-form__detail--input mb-0"
        v-model="address.detail"
        @input="(e) => $emit('onChangeAddressDetails', e)"
        type="text"
        placeholder="Số nhà, ngách, ngõ, đường, phố..."
        :disabled="!(address.ward && address.district)"
      >
      </b-form-input>
    </b-form-group>
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
      districts: [
        "Hai Bà Trưng",
        "Ba Đình",
        "Bắc Từ Liên",
        "Hoàn Kiếm",
        "Tây Hồ",
        "Cầu Giấy",
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
      // address: {
      //   detail: "",
      //   city: "hanoi",
      //   district: "",
      //   ward: "",
      // },
      // cities: [{ value: "hanoi", text: "Hà Nội" }],
      // districts: [
      //   { value: "hai ba trung", text: "Hai Bà Trưng" },
      //   { value: "ba dinh", text: "Ba Đình" },
      //   { value: "bac tu liem", text: "Bắc Từ Liên" },
      //   { value: "hoan kiem", text: "Hoàn Kiếm" },
      //   { value: "tay ho", text: "Tây Hồ" },
      //   { value: "cau giay", text: "Cầu Giấy" },
      // ],
      // wards: {
      //   "hai ba trung": [
      //     { value: "bach khoa", text: "Bách Khoa" },
      //     { value: "bach mai", text: "Bạch Mai" },
      //     { value: "nguyen du", text: "Nguyễn Du" },
      //     { value: "bach dang", text: "Bạch Đằng" },
      //     { value: "pham dinh ho", text: "Phạm Đình Hổ" },
      //     { value: "le dai hanh", text: "Lê Đại Hành" },
      //     { value: "dong nhan", text: "Đồng Nhân" },
      //     { value: "pho hue", text: "Phố Huế" },
      //     { value: "thanh nhan", text: "Thanh Nhàn" },
      //   ],
      //   "ba dinh": [
      //     { value: "truc bạch", text: "Trúc Bạch" },
      //     { value: "lieu giai", text: "Liễu Giai" },
      //     { value: "quan thanh", text: "Quán Thánh" },
      //     { value: "doi can", text: "Đội Cấn" },
      //     { value: "kim ma", text: "Kim Mã" },
      //     { value: "giang vo", text: "Giảng Võ" },
      //     { value: "cong vi", text: "Cống Vị" },
      //     { value: "dien bien", text: "Điện Biên" },
      //   ],
      //   "bac tu liem": [
      //     { value: "thuong cat", text: "Thượng Cát" },
      //     { value: "lien mac", text: " Liên Mạc" },
      //     { value: "dong ngac", text: "Đông Ngạc" },
      //     { value: "duc thang", text: "Đức Thắng" },
      //     { value: "thuy phuong", text: "Thụy Phương" },
      //     { value: "tay tuu", text: "Tây Tựu" },
      //     { value: "xuan dinh", text: "Xuân Đỉnh" },
      //     { value: " xuan tao", text: " Xuân Tảo" },
      //     { value: "minh khai", text: "Minh Khai" },
      //   ],
      //   "hoan kiem": [
      //     { value: "phuc tan", text: "Phúc Tân" },
      //     { value: "dong xuan", text: "Đồng Xuân" },
      //     { value: "hang ma", text: "Hàng Mã" },
      //     { value: "hang buom", text: "Hàng Buồm" },
      //     { value: "hang dao", text: "Hàng Đào" },
      //     { value: "hang bo", text: "Hàng Bồ" },
      //     { value: "cua dong", text: "Cửa Đông" },
      //     { value: "ly thai to", text: "Lý Thái Tổ" },
      //   ],
      //   "tay ho": [
      //     { value: "phu thuong", text: "Phú Thượng" },
      //     { value: "nhat tan", text: "Nhật Tân" },
      //     { value: "tu lien", text: "Tứ Liên" },
      //     { value: "quang an", text: "Quảng An" },
      //     { value: "xuan la", text: "Xuân La" },
      //     { value: "yen phu", text: "Yên Phụ" },
      //     { value: "buoi", text: "Bưởi" },
      //     { value: "thuy khue", text: "Thụy Khuê" },
      //   ],
      //   "cau giay": [
      //     { value: "nghia do", text: "Nghĩa Đô" },
      //     { value: "nghia tan", text: "Nghĩa Tân" },
      //     { value: "mai dich", text: "Mai Dịch" },
      //     { value: "dich vong", text: "Dịch Vọng" },
      //     { value: "dich vong hau", text: "Dịch Vọng Hậu" },
      //     { value: "quan hoa", text: "Quan Hoa" },
      //     { value: "yen hoa", text: "Yên Hòa" },
      //     { value: "trung hoa", text: "Trung Hòa" },
      //   ],
      // },
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
