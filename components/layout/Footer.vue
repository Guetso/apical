<template>
  <footer
    class="w-full flex flex-col sm:flex-row justify-between items-center p-2 text-gray-600"
  >
    <NuxtLink class="legals" to="/legals">Mentions Légales</NuxtLink>
    <div class="text-center">
      © 2026 SAS Apical
      <div class="flex flex-col justify-center items-center">
        <div class="credits">
          <a
            target="_blank"
            href="https://fr.freepik.com/vecteurs-libre/ensemble-differents-arbres_3875712.htm#query=arbre&position=1&from_view=search"
          >
            Image de brgfx sur Freepik
          </a>
        </div>

        <div class="credits">
          <a target="_blank" href="https://fr.vecteezy.com/free-png-fr/feuille"
            >Feuille PNGs par Vecteezy</a
          >
        </div>
      </div>
    </div>

    <div class="credits">
      <a href="https://hugohemon.fr">Création Hugo Hémon</a>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.legals,
.credits {
  &:hover {
    text-decoration: underline;
  }
}
</style>
