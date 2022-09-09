<template>
  <div class="content">
    <LayoutNavMain />

    <header class="card card-1 pt-10">
      <BlocsTitle />
    </header>

    <main class="absolute top-3/4">
      <div class="card card-2">
        <div class="relative">
          <AssetsFloatImage
            :src="'oak-leaf'"
            :alt="'feuille de chaine'"
            :width="6"
            :top="-102"
            :rotate="-110"
          />
        </div>
        <BlocsIntroMe />
      </div>

      <div class="card card-3">
        <div class="relative">
          <AssetsFloatImage
            :src="'oak-leaf'"
            :alt="'feuille de chaine'"
            :width="6"
            :top="-120"
            :right="0"
            :rotate="18"
          />
        </div>
        <BlocsWhoAmI />
      </div>

      <div class="card card-4">
        <div class="relative">
          <AssetsFloatImage
            :src="'oak-leaf'"
            :alt="'feuille de chaine'"
            :width="6"
            :top="-130"
            :left="0"
            :rotate="-110"
          />
        </div>
        <BlocsContactMe />
      </div>
      <LayoutFooter />
    </main>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
}
</script>

<style lang="scss" scoped>
header {
  height: 392px;
}
.content {
  display: flex;
  flex-direction: column;
  position: relative;
}
.card {
  width: 100%;
  margin-bottom: 1rem;
  @include breakpoint(medium) {
    margin: auto auto 1rem auto;
    width: 75%;
  }
  &-1 {
    overflow: hidden;
    @include breakpoint(medium) {
      margin: auto;
      width: 100%;
    }
    background: url(~assets/images/noise.png),
      radial-gradient(
        circle at -1% 57.5%,
        rgb(19, 170, 82) 0%,
        rgb(0, 102, 43) 90%
      );
  }
  &-2 {
    padding: 4rem 5%;
    border-radius: 147px 337px / 103px 99px;
    /*     position: absolute; */
    background-color: white;
    /*     top: 290px; */
  }
  &-3 {
    padding: 5rem 5% 4rem 5%;
    border-radius: 337px 147px / 119px 99px;
    /*     position: absolute; */
    background-color: white;
    /*     top: 600px; */
  }
  &-4 {
    margin-bottom: 5rem;
    @include breakpoint(xmedium) {
      margin-bottom: 2.5rem;
    }
    padding: 5rem 5% 4rem 5%;
    border-radius: 147px 337px / 103px 99px;
    /*     position: absolute; */
    background-color: white;
    /*     top: 600px; */
  }
}
/* .dd {
  left: 15%;
  right: 15%;
  top: 85%;
} */
</style>
