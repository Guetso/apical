<template>
  <img
    class="image"
    :style="cssProps"
    :src="require(`~/assets/images/${src}.png`)"
    :alt="alt"
  />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 1,
    },
    top: {
      type: Number,
      default: 0,
    },
    right: {
      type: Number,
      default: null,
    },
    left: {
      type: Number,
      default: null,
    },
    rotate: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    cssProps() {
      return {
        '--width': this.width + 'rem',
        '--top': this.top + 'px',
        '--left': this.left + 'px',
        '--right': this.right + 'px',
        '--rotate': this.rotate + 'deg',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.image {
  position: absolute;
  top: var(--top);
  right: var(--right);
  left: var(--left);
  width: var(--width);
  transform: rotate(var(--rotate));
}
</style>
