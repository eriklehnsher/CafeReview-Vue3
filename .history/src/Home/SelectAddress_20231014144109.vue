<template>
  <div>
    <label for="City">Thành phố:</label>
    <select
      id="City"
      v-model="selectedCity"
      @change="onCityChange"
    >
      <option value="">Chọn thành phố</option>
      <option
        v-for="(City, index) in CityData"
        :key="index"
        :value="City"
      >
        {{ City }}
      </option>
    </select>

    <label for="District">Quận:</label>
    <select
      id="District"
      v-model="selectedDistrict"
      @change="onDistrictChange"
    >
      <option value="">Chọn quận/huyện</option>
      <option
        v-for="(District, index) in DistrictData[selectedCity]"
        :key="index"
        :value="District"
      >
        {{ District }}
      </option>
    </select>

    <label for="Ward">Phường/Xã:</label>
    <select id="Ward" v-model="selectedWard">
      <option value="">Chọn phường/xã</option>
      <option
        v-for="(Ward, index) in WardData[selectedDistrict]"
        :key="index"
        :value="Ward"
      >
        {{ Ward }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      CityData: ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng"],
      DistrictData: {
        "Hà Nội": ["Ba Đình", "Hoàn Kiếm", "Hai Bà Trưng"],
        "Hồ Chí Minh": ["Quận 1", "Quận 2", "Quận 3"],
        "Đà Nẵng": ["Quận Sơn Trà", "Quận Hải Châu"],
      },
      WardData: {
        "Ba Đình": ["Phường Phúc Xá", "Phường Trúc Bạch"],
        "Hoàn Kiếm": ["Phường Phan Chu Trinh", "Phường Hàng Buồm"],
        "Quận 1": ["Phường Bến Nghé", "Phường Cầu Kho"],
        // ...
      },
      selectedCity: "",
      selectedDistrict: "",
      selectedWard: "",
    };
  },
  methods: {
    onCityChange() {
      this.selectedDistrict = "";
      this.selectedWard = "";
    },
    onDistrictChange() {
      this.selectedWard = "";
    },
  },
};
</script>
