<template>
  <header>
    <div class="container">
      <ApicalLogo :color="'#ffffff'" class="apical-logo" />
      <div class="menu-icon"></div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 80px;
  overflow: hidden;
  width: 100%;
  display: flex;
  /* border: solid 1px red; */
  .container {
    width: 380px;
    margin: 0 auto;
    /* border: solid 1px green; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    .apical-logo {
      width: 64px;
    }
    .menu-icon {
      margin-right: 10%;
      &::before {
        @include picto('menu');
        font-size: 2rem;
        color: #ffffff;
      }
    }
  }
}
</style>
