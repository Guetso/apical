<template>
  <section id="services" class="w-full">
    <h2 class="font-semibold text-xl">Qu'est ce qu'Apical ?</h2>
    <p class="center my-2 text-justify">
      Je propose mes services d'<em>élagage</em>, de <em>taille</em> et d'<em
        >abattage</em
      >
      de vos arbres sur toutes les communes de
      <strong>Fouesnant</strong>, <strong>Bénodet</strong>,
      <strong>Combrit</strong>, <strong>Gouesnach</strong> et
      <strong>Quimper</strong>, que vous soyez un professionel ou un
      particulier.
    </p>
    <div
      class="flex flex-col sm:flex-row flex-wrap justify-around items-center my-4"
    >
      <div class="w-52 h-52 my-2 cursor-pointer" @click="openDetail">
        <ActivityCard img-src="flatTree.png" img-alt="Un arbre">
          <strong>Taille</strong> &#x26; <strong>élagage</strong>
        </ActivityCard>
      </div>
      <div class="w-52 h-52 my-2 cursor-pointer" @click="openDetail">
        <ActivityCard img-src="souche.png" img-alt="Un arbre">
          <strong>Abattage</strong>
        </ActivityCard>
      </div>
      <div class="w-52 h-52 my-2 cursor-pointer" @click="openDetail">
        <ActivityCard img-src="broyeur.png" img-alt="Un arbre">
          <strong>Rémanents</strong>
        </ActivityCard>
      </div>
    </div>
    <p class="center my-2 text-justify">
      Pour toutes demandes de renseignements ou de devis n'hésitez pas à me
      <a class="underline text-cyan-600" href="#contact">contacter</a>.
    </p>
    <ModalInfos v-if="isModalOpen" />
  </section>
</template>

<script>
import { EventBus } from '~/plugins/event-bus'
export default {
  data() {
    return {
      isModalOpen: false,
      offsetTop: null,
    }
  },
  mounted() {
    this.offsetTop = document.body.scrollTop
    EventBus.$on('openModalInfos', () => {
      this.fixedBody()
      this.openModal()
    })
    EventBus.$on('closeModalInfos', () => {
      this.fluentBody()
      this.closeModal()
    })
  },
  beforeDestroy() {
    EventBus.$off('openModalInfos')
    EventBus.$off('closeModalInfos')
  },
  methods: {
    openDetail() {
      this.offsetTop = window.pageYOffset.toString()
      EventBus.$emit('openModalInfos')
    },
    openModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    },
    fixedBody() {
      const body = document.body
      body.style.overflowY = 'hidden'
      body.style.height = '100vh'
      body.style.right = '0'
      body.style.left = '0'
      body.style.top = -window.scrollY + 'px'
      body.style.position = 'fixed'
    },
    fluentBody() {
      const body = document.body
      const scrollY = body.style.top
      body.style.position = 'static'
      body.style.height = '100%'
      body.style.overflowY = ''
      body.style.top = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    },
  },
}
</script>

<style></style>
