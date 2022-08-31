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
  .logo {
    position: absolute;
    top: -165px;
    max-width: 100%;
    overflow: hidden;
    img {
      width: 46rem;
    }
  }
}
</style>
