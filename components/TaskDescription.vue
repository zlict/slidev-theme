<script setup lang="ts">
defineProps({
  number: {
    required: true
  },
  title: {
    required: true
  },
  time: {
    required: true
  },
  method: {
    required: true
  },
  result: {
    required: true
  }
})
</script>

<style lang="scss">
ul.task-description {
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-top: -1em;
  margin-left: -1em;
  margin-right: -1em;
  margin-bottom: 1em;
  border: 2px solid var(--slidev-theme-secondary);
  border-radius: 10px;
  padding: 0.2em 1em;

  li {
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
      font-size: 0.7em;

    span:first-of-type {
      font-weight: bold;
      padding-right: 0.4em;
    }
  }
}
</style>

<template>
  <h1>Aufgabe {{ number }}: {{ title }}</h1>
  <ul className="task-description">
    <li><span>Zeit:</span><span>{{ time }}</span></li>
    <li><span>Methode:</span><span>{{ method }}</span></li>
    <li><span>Ergebnis:</span><span>{{ result }}</span></li>
  </ul>
</template>
