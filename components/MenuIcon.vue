<template>
  <div id="menu-icon" class="flex md:hidden" @click="openModal">
    <div class="icon">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '~/plugins/event-bus'
export default {
  methods: {
    openModal() {
      EventBus.$emit('openModalMenu')
    },
  },
}
</script>

<style lang="scss" scoped>
#menu-icon {
  z-index: 1;
  cursor: pointer;
  border-radius: 129px;
  background-color: #d4dbd3;
  position: absolute;
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
</style>
