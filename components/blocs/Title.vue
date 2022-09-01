<template>
  <div id="bloc-title">
    <div class="logo"><img src="~/assets/images/logo.svg" alt="" /></div>
    <Title />
  </div>
</template>

<script>
export default {
  name: 'BlocTitle',
}
</script>

<style lang="scss" scoped>
#bloc-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 9% auto;
  @include breakpoint(xmedium) {
    margin: 4% auto;
  }
  .logo {
    position: absolute;
    top: -165px;
    @include breakpoint(xxmedium) {
      top: -234px;
    }
    @include breakpoint(xmedium) {
      top: -267px;
    }
    @include breakpoint(medium) {
      top: -387px;
    }
    @include breakpoint(large) {
      top: -394px;
    }
    max-width: 100%;
    overflow: hidden;
    img {
      width: 46rem;
      @include breakpoint(medium) {
        width: 57rem;
      }
    }
  }
}
</style>
