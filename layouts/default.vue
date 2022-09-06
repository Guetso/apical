<template>
  <div>
    <nuxt />
    <LayoutModalMenu v-if="isModalOpen" />
    <LayoutTopBtn />
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
    EventBus.$on('openModalMenu', () => {
      this.fixedBody()
      this.openModal()
    })
    EventBus.$on('closeModalMenu', () => {
      this.fluentBody()
      this.closeModal()
    })
  },
  beforeDestroy() {
    EventBus.$off('openModalMenu')
    EventBus.$off('closeModalMenu')
  },
  methods: {
    openModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    },
    fixedBody() {
      const body = document.body
      body.style.position = 'fixed'
      body.style.top = '0'
      body.style.left = '0'
      body.style.right = '0'
      body.style.height = '100vh'
      body.style.overflowY = 'hidden'
    },
    fluentBody() {
      const body = document.body
      body.style.position = 'static'
      body.style.height = '100%'
      body.style.overflowY = ''
    },
  },
}
</script>

<style lang="scss" scoped></style>
