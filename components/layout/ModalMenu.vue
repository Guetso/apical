<template>
  <div id="modal">
    <div @click="closeModal">X</div>
  </div>
</template>

<script>
import { EventBus } from '~/plugins/event-bus'
export default {
  methods: {
    closeModal() {
      EventBus.$emit('closeModal')
    },
  },
}
</script>

<style lang="scss" scoped>
#modal {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.555);
  z-index: 50;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
