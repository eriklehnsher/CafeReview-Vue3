<template>
  <div class="group__input-data">
    <div class="form-group">
      <label for=""></label>
      <select class="custom-select" name="" id="">
        <option value="" placeholder="Choose your district" selected></option>
        <option v-for="district in districts" v-bind:key="district.value">
          {{ district.text }}
        </option>
      </select>
      <select>
        <option value="" placeholder="Choose your wards" selected></option>
        <option v-for="ward in wards" v-bind:key="ward">
          {{ ward }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { ref, onmounted } from "vue";
export default {
  setup() {
    const cities = ref([{ value: "hanoi", text: "Hà Nội" }]);
    const districts = ref([
      { value: "hai ba trung", text: "Hai Bà Trưng" },
      { value: "ba dinh", text: "Ba Đình" },
      { value: "bac tu liem", text: "Bắc Từ Liên" },
      { value: "hoan kiem", text: "Hoàn Kiếm" },
      { value: "tay ho", text: "Tây Hồ" },
      { value: "cau giay", text: "Cầu Giấy" },
    ]);
  return { cities, districts }
  },
};
</script>

<style></style>
