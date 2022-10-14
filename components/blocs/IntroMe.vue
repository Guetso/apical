<template>
  <section id="services" class="w-full">
    <h2 class="font-semibold text-xl">Qu'est ce qu'Apical ?</h2>
    <p class="center my-2 text-justify">
      Apical Élagage est une entreprise <em>fouesnantaise</em> spécialisée dans
      l'entretien de vos <em>arbres</em>.
    </p>
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
    <p class="center my-2 text-justify">
      Vous trouverez ci-dessous la liste de mes différentes prestations.<br />
      N'hésitez pas à me
      <a class="underline text-green-800" href="#contact">contacter</a>
      en cas de doute ou de questions.
    </p>
    <h3 class="font-semibold mt-8 text-l">Mes prestations</h3>
    <span class="italic text-sm"
      >Cliquer sur une image pour plus de détails</span
    >
    <ServicesTree />
    <p class="center my-2 text-justify">
      Pour toutes demandes de renseignements ou de devis n'hésitez pas à me
      <a class="underline text-green-800" href="#contact">contacter</a>.
    </p>
    <ModalInfos v-show="isModalOpen" :img-src="subjectPicture">
      <template #title>
        <div v-show="modalSubject === 1">
          <strong>Taille</strong> &#x26; <strong>élagage</strong>
        </div>
        <div v-show="modalSubject === 2">
          <strong>Abattage</strong>
        </div>
        <div v-show="modalSubject === 3">
          <strong>Rémanents</strong>
        </div>
      </template>
      <template #content>
        <div v-show="modalSubject === 1">
          <p class="mb-4 text-center">
            Une recherche esthétique ou en réponse à des contraintes. Dans le
            respect du végétal pour des arbres pérennes. La taille peut répondre
            à différents objectifs:
          </p>
          <ul class="flex flex-col items-start w-2/3 m-auto">
            <li class="m-2">
              <strong class="font-bold">La taille sanitaire</strong>
              : bois morts, branches cassées...
            </li>
            <li class="m-2">
              <strong class="font-bold">La taille d'éclaircie</strong> :
              recherche de lumière.
            </li>
            <li class="m-2">
              <span class="font-bold">La taille d'adaptation</span>
              : en réponse à toute type de contraintes (maison...).
            </li>
          </ul>

          <div class="bg-white w-80 h-px mx-auto my-6" />

          <div
            class="flex flex-col lg:flex-row lg:justify-around lg:items-center"
          >
            <span class="sm:ml-12 lg:hidden">Avant :</span>
            <img
              class="rounded-lg w-80 lg:w-1/3 mx-auto my-8"
              src="~/assets/images/arbre-non-elague-fouesnant.jpg"
              alt="Un arbre non taillé"
            />
            <span class="before hidden lg:block" />
            <span class="sm:ml-12 lg:hidden">Après :</span>
            <img
              class="after rounded-lg w-80 lg:w-1/3 mx-auto my-8"
              src="~/assets/images/elagage-fouesnant.jpg"
              alt="Un arbre taillé"
            />
          </div>
        </div>

        <div v-show="modalSubject === 2">
          <p class="mb-4 text-center">
            En fonction de l'arbre et de sa situation, plusieurs techniques
            d'abattage peuvent être envisagées :
          </p>
          <ul class="flex flex-col items-start w-2/3 m-auto">
            <li class="m-2">
              <strong class="font-bold">Abattage au pied</strong>
            </li>
            <li class="m-2">
              <strong class="font-bold">Abattage par démontage</strong>
            </li>
            <li class="m-2">
              <span class="font-bold">Abattage en rétention</span>
            </li>
          </ul>
          <div class="bg-white w-80 h-px mx-auto my-6" />
          <img
            class="rounded-lg w-80 lg:w-1/4 mx-auto my-10"
            src="~/assets/images/abattage-arbre.jpg"
            alt="Un arbre entrain d'être abattu par découpage en billot"
          />
        </div>

        <div v-show="modalSubject === 3">
          <p class="mb-4 text-center">
            Les rémanents sont tous les éléments qu'il reste après
            taille/abattage de l'arbre.
          </p>
          <ul class="flex flex-col items-start w-2/3 m-auto">
            <li class="m-2">
              <strong class="font-bold">Broyage fin</strong>
              : permets d'obtenir des copeaux de bois, idéal pour le paillage.
            </li>
            <li class="m-2">
              <strong class="font-bold">Débitage</strong> : pour bois de
              chauffe.
            </li>
            <li class="m-2">
              <span class="font-bold">Évacuation</span>
              : Si vous ne souhaitez pas conserver les rémanents, ceux ci
              peuvent être évacués.
            </li>
          </ul>
          <div class="bg-white w-80 h-px mx-auto my-6" />
          <img
            class="rounded-lg w-80 lg:w-1/4 mx-auto my-10"
            src="~/assets/images/broyeur.jpg"
            alt="Une remorque remplie de copeaux de bois"
          />
        </div>
      </template>
    </ModalInfos>
  </section>
</template>

<script>
import { EventBus } from '~/plugins/event-bus'
export default {
  data() {
    return {
      isModalOpen: false,
      modalSubject: null,
      offsetTop: null,
    }
  },
  computed: {
    subjectPicture() {
      let pictureName = ''
      switch (this.modalSubject) {
        case 1:
          pictureName = 'flatTree.png'
          break
        case 2:
          pictureName = 'souche.png'
          break
        case 3:
          pictureName = 'broyeur.png'
          break
        default:
          pictureName = 'flatTree.png'
      }
      return pictureName
    },
  },
  mounted() {
    this.offsetTop = document.body.scrollTop
    EventBus.$on('openModalInfos', (x) => {
      this.modalSubject = x
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

<style lang="scss" scoped>
li {
  &::before {
    @include picto('dot');
    font-size: 1rem;
    padding: 0.5rem;
    color: green;
  }
}

.before {
  &::after {
    @include picto('right');
    font-size: 3rem;
    padding: 0.5rem;
    color: green;
  }
}
</style>
