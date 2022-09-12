<template>
  <header id="header" class="relative">
    <div class="greenBg absolute top-0 w-full h-96"></div>
    <LayoutNavBar />
    <Title />
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.greenBg {
  z-index: -1;
  background: url('~/assets/images/backGroundLogo.svg'),
    url(~assets/images/noise.png),
    radial-gradient(
      circle at -1% 57.5%,
      rgb(19, 170, 82) 0%,
      rgb(0, 102, 43) 90%
    );
  background-repeat: no-repeat, repeat;
  background-size: contain, auto;
  background-position: top;
  @include breakpoint(xmedium) {
    background-size: cover, auto;
    height: 27rem;
  }
  @include breakpoint(large) {
    background-position: center;
    height: 27rem;
  }
}
</style>
