<template>
  <main class="carousel">
    <section><BlocTitle class="card" /></section>
    <section class="card"></section>
    <section class="card"></section>
    <section class="card"></section>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
.carousel {
  display: flex;
  flex-direction: column;
}
.card {
  height: 600px;
  border: solid 1px black;
}
</style>
