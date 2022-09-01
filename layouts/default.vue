<template>
  <div>
    <nuxt />
    <LayoutModalMenu v-if="isModalOpen" />
  </div>
</template>

<script>
import { EventBus } from '~/plugins/event-bus'
export default {
  data() {
    return {
      isModalOpen: false,
    }
  },
  mounted() {
    EventBus.$on('openModal', () => {
      this.openModal()
    })
    EventBus.$on('closeModal', () => {
      this.closeModal()
    })
  },
  beforeDestroy() {
    EventBus.$off('openModal')
    EventBus.$off('closeModal')
  },
  methods: {
    openModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    },
  },
}
</script>

<style lang="scss" scoped></style>
