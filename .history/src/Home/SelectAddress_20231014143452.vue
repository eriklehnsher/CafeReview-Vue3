<template>
  <div class="SelectAdress">
    <label for="Cities">Thành Phố:</label>
    <select id="Cities" v-model="SelectCity" @change="onCityChange">
      <option value="" disabled selected>Chọn thành phố</option>
      <option v-for="(City, index) in CitiesData" :key="index" :value="City">
        {{ City }}
      </option>
    </select>

    <label for="Districts">Quận:</label>
    <select id="Districts" v-model="SelectDistrict" @change="onDistrictChange">
      <option value="" disabled selected>Chọn Quận</option>
      <option
        v-for="(District, index) in DistrictsData[SelectDistrict]"
        :key="index"
        :value="District"
      >
        {{ District }}
      </option>
    </select>

    <label for="Wards">Phường:</label>
    <select id="Wards" v-model="SelectWard" @change="onWardChange">
      <option value="" disabled selected>Chọn Phường</option>
      <option
        v-for="(Ward, index) in WardsData[SelectWard]"
        :key="index"
        :value="Ward"
      >
        {{ Ward }}
      </option>
    </select>

    <input type="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      CitiesData: ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng"],
      DistrictsData: {
        "Hà Nội": ["Ba Đình", "Hoàn Kiếm", "Hai Bà Trưng"],
        "Hồ Chí Minh": ["Quận 1", "Quận 2", "Quận 3"],
        "Đà Nẵng": ["Quận Sơn Trà", "Quận Hải Châu"],
      },
      WardsData: {
        "Ba Đình": ["Phường Phúc Xá", "Phường Trúc Bạch"],
        "Hai Bà Trưng": ["Phường Phúc Xá", "Phường Trúc Bạch"],
        "Hoàn Kiếm": ["Phường Phan Chu Trinh", "Phường Hàng Buồm"],
        "Quận 1": ["Phường Bến Nghé", "Phường Cầu Kho"],
        "Quận 2": ["Phường Bến Nghé", "Phường Cầu Kho"],
        "Quận 3": ["Phường Bến Nghé", "Phường Cầu Kho"],
        "Quận Sơn Trà": ["Phường Bến Nghé", "Phường Cầu Kho"],
        "Quận Hải Châu": ["Phường Bến Nghé", "Phường Cầu Kho"],
      },
      SelectCity: "",
      SelectDistrict: "",
      SelectWard: "",
    };
  },
  methods: {
    onCityChange() {
      this.SelectDistrict = "";
      this.SelectWard = "";
    },
    onDistrictChange() {
      this.SelectWard = "";
    },
  },
};
</script>

<style></style>
