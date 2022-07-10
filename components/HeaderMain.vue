<template>
  <header>
    <div class="container">
      <ApicalLogo :color="'#c3ceb6'" class="apical-logo" />
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 80px;
  overflow: hidden;
  width: 100%;
  display: flex;
  border: solid 1px red;
}
.container {
  width: 340px;
  margin: 0 auto;
  border: solid 1px green;
}
.apical-logo {
  width: 64px;
}
</style>
