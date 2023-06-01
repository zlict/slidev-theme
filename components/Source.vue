<script setup lang="ts">
defineProps({
  url: {
    required: true,
    type: String
  }
})
</script>

<style lang="scss">
.source-component {
  font-size: 0.5em;
}
</style>

<template>
  <span className="source-component">Quelle: <a :href="url">{{ url }}</a></span>
</template>
