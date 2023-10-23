<template>
  <div class="Dropdown">
    <div class="option"></div>
  </div>
</template>

<script>
import { defineProps } from "vue"

const props = defineProps (props:{
   options :{
    type: Array,
    required: true
   }
})
export default {};
</script>

<style></style>
