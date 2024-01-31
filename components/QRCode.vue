<script setup lang="ts">
import VueQrcode from '@chenfengyuan/vue-qrcode'

defineProps({
  value: {
    required: true,
    type: String
  }
})
</script>

<style lang="scss">
  svg path:nth-child(2) {
    stroke: var(--slidev-theme-primary);
  }
</style>

<template>
  <vue-qrcode :value="value" tag="svg"></vue-qrcode>
</template>
