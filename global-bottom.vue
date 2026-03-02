<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

const { $nav } = useSlideContext()
</script>

<template>
  <footer style="font-size: 0.5em" class="absolute top-7 right-4 pr-8 right-0 text-right text-gray-400 flex z-1">
    <div>
      {{ $nav.currentPage }}&nbsp;/&nbsp;{{ $nav.total }}
    </div>
  </footer>
</template>
