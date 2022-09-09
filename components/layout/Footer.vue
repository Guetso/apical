<template>
  <footer
    class="absolute bottom-0 w-full flex flex-col sm:flex-row justify-between items-center p-2 mt-8 text-gray-600"
  >
    <NuxtLink class="legals" to="/legals">Mentions Légales</NuxtLink>
    <div>© 2022 SAS Apical</div>
    <div>Création Hugo Hémon</div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.legals {
  &:hover {
    text-decoration: underline;
  }
}
</style>
