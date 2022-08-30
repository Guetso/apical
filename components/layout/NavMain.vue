<template>
  <nav>
    <div class="container w-full sm:w-5/6 lg:w-full">
      <AssetsApicalLogo :color="'#00662b'" class="apical-logo" />
      <div class="menu-icon">
        <div class="icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
nav {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 85px;
  overflow: hidden;
  width: 100%;
  display: flex;
  .container {
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .apical-logo {
      width: 85px;
      background-color: #d4dbd3;
      border-radius: 0px 129px 129px 131px;
    }
    .menu-icon {
      border-radius: 129px;
      background-color: #d4dbd3;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 15px;
      right: 15px;
      width: 3rem;
      height: 3rem;
    }

    .icon div {
      margin: 3px auto;
      width: 20px;
      height: 3px;
      background-color: #00662b;
      border-radius: 30px;
    }
  }
}
</style>
