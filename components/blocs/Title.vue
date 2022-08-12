<template>
  <div id="bloc-title">
    <!--     <AssetsApicalLogo
      :color="'#a0c99b'"
      class="apical-logo"
      alt="Logo Apical"
    /> -->
    <!--     <img src="~/assets/images/tree.png" alt="" /> -->
    <div class="logo"><AssetsApicalLogo :color="'#8df3392f'" /></div>
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
  .logo {
    position: absolute;
    top: -173px;
    width: 46rem;
  }
}
</style>
