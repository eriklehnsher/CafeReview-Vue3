<template>
  <div class="group__input-data">
    <div class="form-group">
      <label for=""></label>
      <select name="cities" id="cities" autocomplete="cities-name">
        <option v-for="city in cities" v-bind:key="city">
          {{ city.name }}
        </option>
      </select>
      <select name="cities" id="cities" autocomplete="cities-name">
        <option v-for="district in districts" v-bind:key="district">
          {{ district.text }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const cities = ref([{ id: "01", name: "Hà Nội", city_id:"01" },{ id: "02", name: "Đà Nẵng" , city_id:"02"}]);
    const districts = ref([
      { city_id: "01", text: "Hai Bà Trưng" },
      { city_id: "01", text: "Ba Đình" },
      { city_id: "01", text: "Bắc Từ Liên" },
      { city_id: "01", text: "Hoàn Kiếm" },
      { city_id: "01", text: "Tây Hồ" },
      { city_id: "01", text: "Cầu Giấy" },
      { city_id: "02", text: "Hai Bà Trưn" },
      { city_id: "02", text: "Ba Đìn" },
      { city_id: "02", text: "Bắc Từ Liê" },
    
    ]);
    return { cities, districts };
  },
};
</script>

<style></style>
