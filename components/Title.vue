<template>
  <div id="bloc-title" class="text-white">
    <div class="w-full sm:w-5/6 sm:w-3/4 lg:w-1/2 m-auto p-4 text-center">
      <h1>
        <strong class="uppercase text-xl lg:text-2xl mt-5 tracking-wide">
          élagage, taille, abattage
        </strong>
        <br />
        <strong class="text-5xl lg:text-6xl title mt-3 font-sans font-bold"
          >APICAL</strong
        >
      </h1>

      <h2 class="mt-5 uppercase tracking-wider lg:text-xl">
        Arboriste grimpeur <br />
        dans le <em>Finistère</em>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlocTitle',
}
</script>

<style lang="scss" scoped>
#bloc-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @include breakpoint(xmedium) {
    margin: 4% auto;
  }
  .logo {
    position: absolute;
    top: -165px;
    @include breakpoint(xxmedium) {
      top: -234px;
    }
    @include breakpoint(xmedium) {
      top: -267px;
    }
    @include breakpoint(medium) {
      top: -387px;
    }
    @include breakpoint(large) {
      top: -394px;
    }
    max-width: 100%;
    overflow: hidden;
    img {
      width: 46rem;
      @include breakpoint(medium) {
        width: 57rem;
      }
    }
  }
}
</style>
