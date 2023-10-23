<template>
  <div class="group__input-data">
    <div class="form-group">
      <label for=""></label>
      <select name="cities" id="cities" autocomplete="cities-name">
        <option v-for="city in cities" :key="city.id" :value="city.id">
          {{ city.name }}
        </option>
      </select>
      <select name="cities" id="cities" autocomplete="cities-name">
        <option v-for="district in districts" :key="district.id" :value="district.id">
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
      {id:"01", city_id: "01", text: "Hai Bà Trưng" },
      {id:"02", city_id: "01", text: "Ba Đình" },
      { id:"03",city_id: "01", text: "Bắc Từ Liên" },
      { id:"04",city_id: "01", text: "Hoàn Kiếm" },
      { id:"05",city_id: "01", text: "Tây Hồ" },
      {id:"06", city_id: "01", text: "Cầu Giấy" },
      {id:"07", city_id: "02", text: "Hai Bà Trưn" },
      { id:"08",city_id: "02", text: "Ba Đìn" },
      { id:"09",city_id: "02", text: "Bắc Từ Liê" },
    
    ]);
    const selectedCity = ref(01)
    return { cities, districts };
  },
};
</script>

<style></style>
