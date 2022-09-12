<template>
  <div class="topBtn cursor-pointer" @click="scrollToTop">
    <div class="btn" />
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
  },
}
</script>

<style lang="scss" scoped>
.topBtn {
  z-index: 1;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 48px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  border-radius: 53px;
  background-color: rgba(140, 186, 41, 0.49);
  .btn {
    position: relative;
    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -5%);
      @include picto('up-open');
      font-size: 1.8rem;
    }
  }
}
</style>
