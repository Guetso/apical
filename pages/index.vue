<template>
  <main class="carousel">
    <LayoutNavMain />

    <header class="card card-1 pt-10">
      <BlocsTitle />
    </header>

    <div class="card card-2">
      <div class="ml-8">
        <AssetsFloatImage
          :src="'oak-leaf'"
          :alt="'feuille de chaine'"
          :width="6"
          :top="-52"
          :rotate="-110"
        />
      </div>
      <BlocsIntroMe />
    </div>

    <!--     <div class="card card-3">
      <BlocsMyServices />
    </div> -->
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
  width: 100%;
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
    padding: 4rem 5%;
    border-radius: 147px 337px / 119px 99px;
    position: absolute;
    background-color: white;
    top: 290px;
  }
  /*   &-3 {
    padding: 4rem 5%;
    border-radius: 147px 337px / 119px 99px;
    position: absolute;
    background: radial-gradient(
      circle at -1% 57.5%,
      rgb(19, 170, 82) 0%,
      rgb(0, 102, 43) 90%
    );
    top: 600px;
  } */
}
</style>
