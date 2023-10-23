<template>
  <div class="SearchBox d-flex ">
    <div class="SelectType">
      <select id="SelectType" v-model="SelectedType">
        <option value="" selected>Chọn Quán</option>
        <option value="">Quán Cafe</option>
        <option value="">Quán Ăn</option>
      </select>
    </div>

    <div class="SelectAddress d-flex justify-content-between">
      <div class="SelectAddress-City d-flex flex-column">
        <label for="City">Thành phố:</label>
        <select id="City" v-model="selectedCity" @change="onCityChange">
          <option value="">Chọn thành phố</option>
          <option v-for="(City, index) in CityData" :key="index" :value="City">
            {{ City }}
          </option>
        </select>
      </div>
      <div class="SelectAddress-District d-flex flex-column">
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
      </div>

      <div class="SelectAddress-Ward d-flex flex-column">
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
    </div>
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
<style>
.searchbox {
  width: 925px;
  height: 100px;
  border-radius: 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  border-left: 1px solid rgba(0, 0, 0, 0.5);
  background: #fff;
  box-shadow: 2px 6px 4px 0px rgba(0, 0, 0, 0.5);
  padding: 10px 5%;
}
.searchbox-content {
  padding: 10px 5%;
}</style>
