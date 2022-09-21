<template>
  <div
    class="flex flex-col sm:flex-row flex-wrap justify-around items-center my-4"
  >
    <div class="flex flex-col items-center">
      <div class="w-52 h-52 my-2 cursor-pointer" @click="openDetail(1)">
        <ActivityCard img-src="flatTree.png" img-alt="Un arbre">
          <strong>Taille</strong> &#x26; <strong>élagage</strong>
        </ActivityCard>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-52 h-52 sm:my-2 mt-2 cursor-pointer" @click="openDetail(2)">
        <ActivityCard img-src="souche.png" img-alt="Une souche d'arbre">
          <strong>Abattage</strong>
        </ActivityCard>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-52 h-52 my-2 cursor-pointer" @click="openDetail(3)">
        <ActivityCard img-src="broyeur.png" img-alt="Un broyeur de branches">
          <strong>Rémanents</strong>
        </ActivityCard>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '~/plugins/event-bus'
export default {
  methods: {
    openDetail(x) {
      EventBus.$emit('openModalInfos', x)
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
