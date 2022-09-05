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
    <div class="content h-4/5 flex justify-center items-center text-center">
      <ul class="text-3xl uppercase text-white">
        <li class="m-10 cursor-pointer" @click="onClick('#services')">
          Apical ?
        </li>
        <li class="m-10 cursor-pointer" @click="onClick('#whoAmI')">
          Qui suis-je ?
        </li>
        <li class="m-10 cursor-pointer" @click="onClick('#contact')">
          Me contacter
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { EventBus } from '~/plugins/event-bus'
export default {
  methods: {
    closeModal() {
      EventBus.$emit('closeModal')
    },
    onClick(id) {
      this.closeModal()
      this.$router.push({ hash: id })
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
