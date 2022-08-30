<template>
  <div id="activity" :class="'relative flex justify-center items-center' + ' ' + `h-${height}`">
    <img :src="require(`~/assets/images/${imgSrc}`)" :alt="imgAlt" />
    <div class="legend text-center absolute bottom-2 left-4 right-4">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    imgAlt: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      default: 52,
    },
  },
}
</script>

<style lang="scss" scoped>
#activity {
  background: url(~assets/images/noise.png),
    radial-gradient(
      circle at -1% 57.5%,
      rgb(19, 170, 82) 0%,
      rgb(0, 102, 43) 90%
    );
  border-radius: 26px;
  padding: 1.5rem;
  padding-top: 0rem;
}
.legend {
  border-radius: 13px;
  padding: 1rem;
  background-color: #d8dfd0be;
}
</style>
