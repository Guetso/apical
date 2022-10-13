<template>
  <div id="modal" class="flex flex-col text-white">
    <div class="modalContainer h-full">
      <div class="header flex flex-col justify-between items-center h-2/5 mb-4">
        <div
          class="closeBtn self-end p-4 cursor-pointer w-14 h-14 text-center text-3xl font-extrabold text-yellow-800"
          @click="closeModal"
        >
          X
        </div>
        <div class="w-48 h-48 text-black">
          <ActivityCard :img-src="imgSrc" :img-alt="'un arbre'">
            <slot name="title" />
          </ActivityCard>
        </div>
      </div>
      <div class="h-4/5 p-4 2xl:w-5/12 2xl:m-auto">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '~/plugins/event-bus'
export default {
  props: {
    imgSrc: {
      type: String,
      required: false,
      default: '',
    },
  },
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
  overflow-y: scroll;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 50;
  top: 0;
  height: 100vh;
  left: 0;
  right: 0;
}
</style>
