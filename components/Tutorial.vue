<!-- Please remove this file from your project -->
<template>
  <div
    class="flex flex-col justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <div class="flex justify-center sm:pt-0">
      <ApicalLogo />
    </div>
    <h1 class="flex justify-center sm:pt-0 text-2xl font-bold">APICACAL</h1>
    <h2 class="flex justify-center mt-4 text-2xl tracking-in-contract-bck-top">
      Ça va chier des bûches !
    </h2>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
}
</script>

<style lang="css" scoped>
.tracking-in-contract-bck-top {
  -webkit-animation: tracking-in-contract-bck-top 2s
    cubic-bezier(0.215, 0.61, 0.355, 1) 1s both;
  animation: tracking-in-contract-bck-top 2s cubic-bezier(0.215, 0.61, 0.355, 1)
    1s both;
}
@-webkit-keyframes tracking-in-contract-bck-top {
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(400px) translateY(-300px);
    transform: translateZ(400px) translateY(-300px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}
@keyframes tracking-in-contract-bck-top {
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(400px) translateY(-300px);
    transform: translateZ(400px) translateY(-300px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}
</style>
