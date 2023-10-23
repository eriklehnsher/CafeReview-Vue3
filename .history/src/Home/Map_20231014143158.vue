<template>
  <div>
    <label for="tinhThanh">Tỉnh/Thành phố:</label>
    <select id="tinhThanh" v-model="selectedTinhThanh" @change="onTinhThanhChange">
      <option value="">Chọn tỉnh/thành phố</option>
      <option v-for="(tinhThanh, index) in tinhThanhData" :key="index" :value="tinhThanh">{{ tinhThanh }}</option>
    </select>

    <label for="quanHuyen">Quận/Huyện:</label>
    <select id="quanHuyen" v-model="selectedQuanHuyen" @change="onQuanHuyenChange">
      <option value="">Chọn quận/huyện</option>
      <option v-for="(quanHuyen, index) in quanHuyenData[selectedTinhThanh]" :key="index" :value="quanHuyen">{{ quanHuyen }}</option>
    </select>

    <label for="phuongXa">Phường/Xã:</label>
    <select id="phuongXa" v-model="selectedPhuongXa">
      <option value="">Chọn phường/xã</option>
      <option v-for="(phuongXa, index) in phuongXaData[selectedQuanHuyen]" :key="index" :value="phuongXa">{{ phuongXa }}</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tinhThanhData: ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng"],
      quanHuyenData: {
        "Hà Nội": ["Ba Đình", "Hoàn Kiếm", "Hai Bà Trưng"],
        "Hồ Chí Minh": ["Quận 1", "Quận 2", "Quận 3"],
        "Đà Nẵng": ["Quận Sơn Trà", "Quận Hải Châu"]
      },
      phuongXaData: {
        "Ba Đình": ["Phường Phúc Xá", "Phường Trúc Bạch"],
        "Hoàn Kiếm": ["Phường Phan Chu Trinh", "Phường Hàng Buồm"],
        "Quận 1": ["Phường Bến Nghé", "Phường Cầu Kho"]
        // ...
      },
      selectedTinhThanh: "",
      selectedQuanHuyen: "",
      selectedPhuongXa: ""
    };
  },
  methods: {
    onTinhThanhChange() {
      this.selectedQuanHuyen = "";
      this.selectedPhuongXa = "";
    },
    onQuanHuyenChange() {
      this.selectedPhuongXa = "";
    }
  }
};
</script>