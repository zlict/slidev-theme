<script setup>
import { useNav } from '@slidev/client'

const { currentPage, total } = useNav()
</script>

<template>
  <footer style="font-size: 0.5em" class="absolute top-7 right-4 pr-8 right-0 text-right text-gray-400 flex z-1">
    <div>
      {{ currentPage }}&nbsp;/&nbsp;{{ total }}
    </div>
  </footer>
</template>
