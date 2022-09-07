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
    <div class="border flex flex-col items-center">
      <div class="w-52 h-52">
        <ActivityCard img-src="flatTree.png" img-alt="Un arbre">
          <strong>Taille</strong> &#x26; <strong>élagage</strong>
        </ActivityCard>
      </div>
      <div class="w-0.5 h-20 bg-gray-100"></div>
      <div class="w-4/5 h-0.5 bg-gray-100"></div>
      <div class="w-4/5 flex justify-between">
        <div class="w-0.5 h-20 bg-gray-100"></div>
        <div class="w-0.5 h-20 bg-gray-100"></div>
        <div class="w-0.5 h-20 bg-gray-100"></div>
      </div>
      <div class="w-11/12 flex justify-between text-white text-center">
        <div class="border p-2 w-3/12">Sanitaire</div>
        <div class="border p-2 w-3/12">Eclaircie</div>
        <div class="border p-2 w-3/12">Adaptation</div>
      </div>
    </div>
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
