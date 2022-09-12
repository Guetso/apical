<template>
  <nav id="NavBar">
    <div class="wrapper w-full">
      <NuxtLink to="/">
        <AssetsApicalLogo :color="'#00662b'" class="apical-logo" />
      </NuxtLink>
      <MenuIcon />
      <ul
        class="nav-list hidden md:flex justify-around items-center w-full h-full uppercase text-white text-xl p-3"
      >
        <li><a class="relative" href="#services">apical</a></li>
        <li><a class="relative" href="#whoAmI">qui sui-je ?</a></li>
        <li><a class="relative" href="#contact">me contacter</a></li>
      </ul>
    </div>
  </nav>
</template>

<script></script>

<style lang="scss" scoped>
nav {
  height: 85px;
  overflow: hidden;
  display: flex;
  .wrapper {
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .apical-logo {
      width: 85px;
      background-color: #d4dbd3;
      border-radius: 0px 129px 129px 131px;
    }
    .nav-list {
      li a::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 3px;
        top: 100%;
        left: 0;
        background: #ff7000;
        transition: transform 0.5s;
        transform: scaleX(0);
        transform-origin: right;
        z-index: 1;
      }
      li a:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
}
</style>
