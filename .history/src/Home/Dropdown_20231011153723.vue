<template>
  <div class="group__input-data">
    <div class="form-group">
      <label for=""></label>
      <select name="cities" id="cities" autocomplete="cities-name">
        <option v-for="city in cities" v-bind:key="city" disabled aria-required=""> {{city.text}}</option> 
      </select>
      
    </div>
  </div>
</template>

<script>
import { ref   } from "vue";
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
