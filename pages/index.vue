<template>
  <main>
    <div class="card card-2">
      <div class="relative">
        <AssetsFloatImage
          :src="'oak-leaf'"
          :alt="'feuille de chaine'"
          :width="6"
          :top="-102"
          :rotate="-110"
        />
      </div>
      <BlocsIntroMe />
    </div>

    <div class="card card-3">
      <div class="relative">
        <AssetsFloatImage
          :src="'oak-leaf'"
          :alt="'feuille de chaine'"
          :width="6"
          :top="-120"
          :right="0"
          :rotate="18"
        />
      </div>
      <BlocsWhoAmI />
    </div>

    <div class="card card-4">
      <div class="relative">
        <AssetsFloatImage
          :src="'oak-leaf'"
          :alt="'feuille de chaine'"
          :width="6"
          :top="-130"
          :left="0"
          :rotate="-110"
        />
      </div>
      <BlocsContactMe />
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
  head() {
    const ariane = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'home',
          item: 'https://www.apical-elagage-29.fr/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Legals',
          item: 'https://www.apical-elagage-29.fr/legals',
        },
      ],
    }

    const oragnization = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      logo: ['/apical-black-logo.png'],
      name: 'Apical Élagage',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '89 RTE DE KERHALL',
        addressLocality: 'CLOHARS-FOUESNANT',
        addressRegion: 'BRITTANY',
        postalCode: '29950',
        addressCountry: 'FR',
      },
      url: 'https://www.apical-elagage-29.fr',
      email: 'apical.elagage29@gmail.com',
      telephone: '+33687521947',
    }

    return {
      script: [
        {
          type: 'application/ld+json',
          json: ariane,
        },
        {
          type: 'application/ld+json',
          json: oragnization,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
header {
  height: 392px;
}
.content {
  display: flex;
  flex-direction: column;
  position: relative;
}
.card {
  width: 100%;
  margin-bottom: 1rem;
  @include breakpoint(medium) {
    margin: auto auto 1rem auto;
    width: 75%;
  }
  &-1 {
    overflow: hidden;
    @include breakpoint(medium) {
      margin: auto;
      width: 100%;
    }
  }
  &-2 {
    padding: 4rem 5%;
    border-radius: 147px 337px / 103px 99px;
    background-color: white;
    @include breakpoint(large) {
      width: 50%;
    }
  }
  &-3 {
    padding: 5rem 5% 4rem 5%;
    border-radius: 337px 147px / 119px 99px;
    background-color: white;
    @include breakpoint(large) {
      width: 45%;
    }
  }
  &-4 {
    @include breakpoint(xmedium) {
      margin-bottom: 2.5rem;
    }
    @include breakpoint(large) {
      width: 45%;
    }
    padding: 5rem 5% 4rem 5%;
    border-radius: 147px 337px / 103px 99px;
    background-color: white;
  }
}
</style>
