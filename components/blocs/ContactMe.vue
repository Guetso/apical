<template>
  <div id="contact-me">
    <!-- <img class="image" src="~/assets/images/oak-leaf.png" alt="" /> -->
    <AssetsFloatImage
      :src="'oak-leaf'"
      :alt="'feuille de chaine'"
      :width="6"
      :top="-244"
      :rotate="-110"
    />
    <h2 class="h2">Me contacter</h2>
    <p>
      Vous pouvez actuellement me contacter pour tous travaux de <b>taille</b>,
      d'<b>élagage</b> ou d'<b>abattage</b>.
    </p>
    <p>J'interviens sur les communes du <b>finistère sud</b></p>
  </div>
</template>

<script>
export default {
  name: 'BlocContactMe',
}
</script>

<style lang="scss" scoped>
#contact-me {
  position: relative;
}
</style>
