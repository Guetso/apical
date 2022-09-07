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
      class="flex flex-col sm:flex-row flex-wrap justify-center items-center my-4"
    >
      <div class="flex flex-col items-center">
        <div class="w-52 h-52 my-2 cursor-pointer" @click="openFirst">
          <ActivityCard img-src="flatTree.png" img-alt="Un arbre">
            <strong>Taille</strong> &#x26; <strong>élagage</strong>
          </ActivityCard>
        </div>

        <div
          :class="firstOpened ? 'opened' : 'close'"
          class="activities hidden w-full sm:flex flex-col items-center"
        >
          <div class="w-0.5 h-10 bg-gray-500"></div>
          <div class="w-4/5 h-0.5 bg-gray-500"></div>
          <div class="w-4/5 flex justify-between">
            <div class="w-0.5 h-20 bg-gray-500"></div>
            <div class="w-0.5 h-20 bg-gray-500"></div>
            <div class="w-0.5 h-20 bg-gray-500"></div>
          </div>
          <div class="w-11/12 flex justify-between text-center mb-4 h-full">
            <div class="activity relative border p-2">
              <img
                class="w-32"
                src="~/assets/images/flatTree.png"
                alt="un arbre"
              />
              <div class="legend absolute bottom-2 left-0 right-0 p-2 m-1">
                <strong>Sanitaire</strong>
              </div>
            </div>
            <div class="activity relative border p-2">
              <img
                class="w-32"
                src="~/assets/images/flatTree.png"
                alt="un arbre"
              />
              <div class="legend absolute bottom-2 left-0 right-0 p-2 m-1">
                <strong>Eclaircie</strong>
              </div>
            </div>
            <div class="activity relative border p-2">
              <img
                class="w-32"
                src="~/assets/images/flatTree.png"
                alt="un arbre"
              />
              <div class="legend absolute bottom-2 left-0 right-0 p-2 m-1">
                <strong>Adaptation</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        :class="firstOpened ? 'opened' : 'close'"
        class="activities flex justify-start flex-col w-44 sm:hidden"
      >
        <div class="w-0.5 h-10 bg-gray-500"></div>
        <div class="flex items-center border-l-2 border-gray-500">
          <div class="w-10 h-0.5 bg-gray-500"></div>
          <div class="activity relative border w-32 h-32 p-2">
            <img
              class="w-32"
              src="~/assets/images/flatTree.png"
              alt="un arbre"
            />
            <div class="legend absolute bottom-2 left-0 right-0 text-center">
              <strong>Sanitaire</strong>
            </div>
          </div>
        </div>

        <div class="w-0.5 h-10 bg-gray-500"></div>
        <div class="flex items-center border-l-2 border-gray-500">
          <div class="w-10 h-0.5 bg-gray-500"></div>
          <div class="activity relative border w-32 h-32 p-2">
            <img
              class="w-32"
              src="~/assets/images/flatTree.png"
              alt="un arbre"
            />
            <div class="legend absolute bottom-2 left-0 right-0 text-center">
              <strong>Eclaircie</strong>
            </div>
          </div>
        </div>

        <div class="w-0.5 h-10 bg-gray-500"></div>
        <div class="flex items-center border-l-2 border-gray-500">
          <div class="w-10 h-0.5 bg-gray-500"></div>
          <div class="activity relative border w-32 h-32 p-2">
            <img
              class="w-32"
              src="~/assets/images/flatTree.png"
              alt="un arbre"
            />
            <div class="legend absolute bottom-2 left-0 right-0 text-center">
              <strong>Adaptation</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <div class="w-52 h-52 sm:my-2 mt-2 cursor-pointer" @click="openSecond">
          <ActivityCard img-src="souche.png" img-alt="Un arbre">
            <strong>Abattage</strong>
          </ActivityCard>
        </div>

        <div
          :class="secondOpened ? 'opened' : 'close'"
          class="activities hidden sm:flex w-full flex-col items-center"
        >
          <div class="w-0.5 h-10 bg-gray-500"></div>
          <div class="w-4/5 h-0.5 bg-gray-500"></div>
          <div class="w-4/5 flex justify-between">
            <div class="w-0.5 h-20 bg-gray-500"></div>
            <div class="w-0.5 h-20 bg-gray-500"></div>
            <div class="w-0.5 h-20 bg-gray-500"></div>
          </div>
          <div class="w-11/12 flex justify-between text-center mb-4 h-full">
            <div
              class="activity relative border w-[146px] h-[154px] p-2 flex justify-center items-start"
            >
              <img
                class="w-32"
                src="~/assets/images/souche.png"
                alt="un arbre"
              />
              <div class="legend absolute bottom-2 left-0 right-0 p-2 m-1">
                <strong>Au pied</strong>
              </div>
            </div>
            <div
              class="activity relative border w-[146px] h-[154px] p-2 flex justify-center items-start"
            >
              <img
                class="w-32"
                src="~/assets/images/souche.png"
                alt="un arbre"
              />
              <div class="legend absolute bottom-2 left-0 right-0 p-2 m-1">
                <strong>Par démontage</strong>
              </div>
            </div>
            <div
              class="activity relative border h-32 p-2 flex justify-center items-start"
            >
              <img
                class="w-32"
                src="~/assets/images/souche.png"
                alt="un arbre"
              />
              <div class="legend absolute bottom-2 left-0 right-0 p-2 m-1">
                <strong>En rétention</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        :class="secondOpened ? 'opened' : 'close'"
        class="activities flex justify-start flex-col w-44 sm:hidden"
      >
        <div class="w-0.5 h-10 bg-gray-500"></div>
        <div class="flex items-center border-l-2 border-gray-500">
          <div class="w-10 h-0.5 bg-gray-500"></div>
          <div class="activity relative border w-32 h-32 p-2">
            <img class="w-32" src="~/assets/images/souche.png" alt="un arbre" />
            <div class="legend absolute bottom-2 left-0 right-0 text-center">
              <strong>Au pied</strong>
            </div>
          </div>
        </div>

        <div class="w-0.5 h-10 bg-gray-500"></div>
        <div class="flex items-center border-l-2 border-gray-500">
          <div class="w-10 h-0.5 bg-gray-500"></div>
          <div class="activity relative border w-32 h-32 p-2">
            <img class="w-32" src="~/assets/images/souche.png" alt="un arbre" />
            <div class="legend absolute bottom-2 left-0 right-0 text-center">
              <strong>Par démontage</strong>
            </div>
          </div>
        </div>

        <div class="w-0.5 h-10 bg-gray-500"></div>
        <div class="flex items-center border-l-2 border-gray-500">
          <div class="w-10 h-0.5 bg-gray-500"></div>
          <div class="activity relative border w-32 h-32 p-2">
            <img class="w-32" src="~/assets/images/souche.png" alt="un arbre" />
            <div class="legend absolute bottom-2 left-0 right-0 text-center">
              <strong>En rétention</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <div class="w-52 h-52 my-2 cursor-pointer" @click="openThird">
          <ActivityCard img-src="broyeur.png" img-alt="Un arbre">
            <strong>Rémanents</strong>
          </ActivityCard>
        </div>

        <div
          :class="thirdOpened ? 'opened' : 'close'"
          class="activities hidden sm:flex w-full flex-col items-center"
        >
          <div class="w-0.5 h-10 bg-gray-500"></div>
          <div class="w-4/5 h-0.5 bg-gray-500"></div>
          <div class="w-4/5 flex justify-between">
            <div class="w-0.5 h-20 bg-gray-500"></div>
            <div class="w-0.5 h-20 bg-gray-500"></div>
            <div class="w-0.5 h-20 bg-gray-500"></div>
          </div>
          <div class="w-11/12 flex justify-between text-center mb-4 h-full">
            <div class="activity relative border p-2">
              <img
                class="w-32"
                src="~/assets/images/broyeur.png"
                alt="un arbre"
              />
              <div class="legend absolute bottom-2 left-0 right-0 p-2 m-1">
                <strong>Broyage fin</strong>
              </div>
            </div>
            <div class="activity relative border p-2">
              <img
                class="w-32"
                src="~/assets/images/broyeur.png"
                alt="un arbre"
              />
              <div class="legend absolute bottom-2 left-0 right-0 p-2 m-1">
                <strong>Bois de chauffe</strong>
              </div>
            </div>
            <div class="activity relative border p-2">
              <img
                class="w-32"
                src="~/assets/images/broyeur.png"
                alt="un arbre"
              />
              <div class="legend absolute bottom-2 left-0 right-0 p-2 m-1">
                <strong>Evacuation</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        :class="thirdOpened ? 'opened' : 'close'"
        class="activities flex justify-start flex-col w-44 sm:hidden"
      >
        <div class="w-0.5 h-10 bg-gray-500"></div>
        <div class="flex items-center border-l-2 border-gray-500">
          <div class="w-10 h-0.5 bg-gray-500"></div>
          <div class="activity relative border w-32 h-32 p-2">
            <img
              class="w-32"
              src="~/assets/images/broyeur.png"
              alt="un arbre"
            />
            <div class="legend absolute bottom-2 left-0 right-0 text-center">
              <strong>Broyage fin</strong>
            </div>
          </div>
        </div>

        <div class="w-0.5 h-10 bg-gray-500"></div>
        <div class="flex items-center border-l-2 border-gray-500">
          <div class="w-10 h-0.5 bg-gray-500"></div>
          <div class="activity relative border w-32 h-32 p-2">
            <img
              class="w-32"
              src="~/assets/images/broyeur.png"
              alt="un arbre"
            />
            <div class="legend absolute bottom-2 left-0 right-0 text-center">
              <strong>Bois de chauffe</strong>
            </div>
          </div>
        </div>

        <div class="w-0.5 h-10 bg-gray-500"></div>
        <div class="flex items-center border-l-2 border-gray-500">
          <div class="w-10 h-0.5 bg-gray-500"></div>
          <div class="activity relative border w-32 h-32 p-2">
            <img
              class="w-32"
              src="~/assets/images/broyeur.png"
              alt="un arbre"
            />
            <div class="legend absolute bottom-2 left-0 right-0 text-center">
              <strong>Evacuation</strong>
            </div>
          </div>
        </div>
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
      firstOpened: false,
      secondOpened: false,
      thirdOpened: false,
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
    openFirst() {
      this.firstOpened = !this.firstOpened
    },
    openSecond() {
      this.secondOpened = !this.secondOpened
    },
    openThird() {
      this.thirdOpened = !this.thirdOpened
    },
    /*     openDetail() {
      this.offsetTop = window.pageYOffset.toString()
      EventBus.$emit('openModalInfos')
    }, */
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
.activities {
  max-height: 0;
  opacity: 0;
  transition: max-height 1000ms linear, opacity 200ms linear 500ms;
  &.opened {
    max-height: 500px;
    opacity: 1;
  }
}

.activity {
  background: url(~assets/images/noise.png),
    radial-gradient(
      circle at -1% 57.5%,
      rgb(19, 170, 82) 0%,
      rgb(0, 102, 43) 90%
    );
  border-radius: 26px;
}

.legend {
  border-radius: 13px;
  background-color: #d8dfd0be;
}
</style>
