<template>
  <div id="modal">
    <div class="header flex justify-end">
      <div
        class="closeBtn p-4 cursor-pointer w-14 h-14 text-center text-3xl font-extrabold text-yellow-800"
        @click="closeModal"
      >
        X
      </div>
    </div>
    <div class="header flex justify-end">YO</div>
  </div>
</template>

<script>
import { EventBus } from '~/plugins/event-bus'
export default {
  methods: {
    closeModal() {
      EventBus.$emit('closeModalInfos')
    },
    onClick(id) {
      this.closeModal()
    },
  },
}
</script>

<style lang="scss" scoped>
#modal {
  overflow-y: hidden;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 50;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

/* .fixed-body {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow-y: hidden;
} */
</style>
