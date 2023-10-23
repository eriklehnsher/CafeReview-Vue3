<template>
  <div class="group__input-data">
    <b-form-group class="" id="address" label-for="address">
      <div class="d-flex height-48px">
        <b-form-select
          class="car-form__detail--mapSelect w-50"
          id="district"
          v-model="address.district"
          @input="(e) => $emit('onChangeDistrict', e)"
          :options="districts"
          aria-placeholder="Choose district"
          required
        ></b-form-select>

        <b-form-select
          class="car-form__detail--mapSelect w-50"
          id="ward"
          v-model="address.ward"
          @input="(e) => $emit('onChangeWard', e)"
          :options="filterWards"
          :disabled="!address.district"
          required
        ></b-form-select>
      </div>
    </b-form-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      CitysData: ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng"],
      DistrictsData: {
        "Hà Nội": ["Ba Đình", "Hoàn Kiếm", "Hai Bà Trưng"],
        "Hồ Chí Minh": ["Quận 1", "Quận 2", "Quận 3"],
        "Đà Nẵng": ["Quận Sơn Trà", "Quận Hải Châu"],
      },
      WardsData: {
        "Ba Đình": ["Phường Phúc Xá", "Phường Trúc Bạch"],
        "Hoàn Kiếm": ["Phường Phan Chu Trinh", "Phường Hàng Buồm"],
        "Quận 1": ["Phường Bến Nghé", "Phường Cầu Kho"],
      },
    };
  },
};
</script>

<style></style>
