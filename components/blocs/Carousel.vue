<template>
  <client-only>
    <div class="center">
      <carousel
        :per-page="1"
        :speed="2000"
        loop
        mouse-drag
        navigation-enabled
        :pagination-active-color="'#00662b'"
        :pagination-color="'#808080'"
        :autoplay-timeout="5000"
        center-mode
      >
        <slide v-for="slide in slides" :key="slide.key">
          <img class="slide" :src="require(`~/assets/images/${slide.src}`)" />
          <div class="legend">
            <p>{{ slide.legend }}</p>
          </div>
        </slide>
      </carousel>
    </div>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          key: 0,
          src: 'slide1.jpg',
          legend: 'Travaux de taille à Bénodet.',
          alt: "Photo en contre plongée d'un élagueur en haut d'un arbre",
        },
        {
          key: 1,
          src: 'slide2.jpg',
          legend: "Chantier sur Pleuven, élagage d'un chêne.",
          alt: "Photo d'un élagueur dans un chêne",
        },
        {
          key: 2,
          src: 'slide3.jpg',
          legend: 'À la Forêt-Fouesnant, préparation pour un abattage.',
          alt: "Photo d'un pin élagué",
        },
        {
          key: 3,
          src: 'slide5.jpg',
          legend: 'Le démontage de ce pin peut commencer.',
          alt: "Elagueur en haut d'un pin",
        },
        {
          key: 4,
          src: 'slide6.jpg',
          legend: 'Abattage par démontage sur Gouesnach.',
          alt: "Elagueur en haut d'un arbre, faisant descendre un billot de bois",
        },
        {
          key: 5,
          src: 'slide7.jpg',
          legend: 'Elagage sur Fouesnant.',
          alt: 'Un élagueur procédant à un élagage',
        },
        {
          key: 6,
          src: 'slide8.jpg',
          legend: "Direction l'apex.",
          alt: 'Un élagueur encordé grimpe à un arbre',
        },
        {
          key: 7,
          src: 'slide10.jpg',
          legend: 'Taille sanitaire (Fouesnant).',
          alt: "Un arbre entrain d'être taillé",
        },
        {
          key: 8,
          src: 'slide9.jpg',
          legend: 'Une fois la taille terminée, les rémanents seront broyés',
          alt: "Un arbre entrain d'être taillé. En arrière plan, un broyeur à branche",
        },
        {
          key: 9,
          src: 'slide11.jpg',
          legend:
            "Une fois les branches retirées, ne reste plus qu'à procéder à l'abattage",
          alt: "Un élagueur au sommet d'un tronc",
        },
        {
          key: 10,
          src: 'slide12.jpg',
          legend:
            "Sur ce chantier de Gouesnach, beaucoup de pin à nettoyer, d'autres à abattre.",
          alt: "Un élagueur au sommet d'un pin",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.slide {
  border-radius: 5%;
}
.legend {
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.center {
  ::v-deep .VueCarousel-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
