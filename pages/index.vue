<template>
  <main class="carousel">
    <LayoutNavMain />

    <header class="card card-1">
      <BlocsTitle />
    </header>

    <section class="card card-2">
      <aside>
        <p class="text-center p-2">Site actuellement en construction</p>
      </aside>
      <BlocsContactMe />
    </section>

    <!--     <section class="card"><h2></h2></section>
    <section class="card"><h2></h2></section> -->
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss" scoped>
.carousel {
  display: flex;
  flex-direction: column;
  position: relative;
}
.card {
  height: 600px;
  width: 100%;
  > * {
    margin: 80px auto;
    width: 80%;
  }
  &-1 {
    height: 400px;
    background: url(~assets/images/noise.png),
      radial-gradient(
        circle at -1% 57.5%,
        rgb(19, 170, 82) 0%,
        rgb(0, 102, 43) 90%
      );
  }
  &-2 {
    border-radius: 147px 337px / 133px 99px;
    position: absolute;
    background-color: white;
    top: 290px;
  }
}
aside {
  border: solid 1px black;
}
</style>
