<template lang="pug">
  header.header(ref="header")(:class="this.$route.name === 'home'? '' : 'header__color'")
    .header__wrap
      .header__logo
        router-link(tag="div", to="/").logo
          .logo__text-accent Cozy House
          .logo__text Shelter for pets in Boston

      ul.header__menu.menu(ref="menu")
        router-link.menu__item(tag="li", :to="item.href", v-for="(item, i) in nav", :key="i", :active-class="'menu__item--active'" exact) {{ item.name }}

    .header__hamburger.container
      .hamburger(ref="hamburger", @click="toggleMenu")
        span.line(v-for="n in 3", :key="n")

</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .header__wrap {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 1180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    @include laptop {
      width: 668px;
    }
    @include tablets {
      width: 300px;
    }
  }
  .logo {
    cursor: pointer;
  }
  .logo__text-accent {
    font-family: "Times New Roman", serif;
    font-size: 32px;
    color: $accent;
    letter-spacing: 2.5px;
    @include tablets {
      font-size: 24px;
      letter-spacing: 1px;
    }
  }
  .logo__text {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-size: 13px;
    color: #fff;
    letter-spacing: 1.4px;
    @include tablets {
      font-size: 12px;
      letter-spacing: 1px;
    }
  }
  .menu__item {
    color: #cdcdcd;
    margin-left: 35px;
    cursor: pointer;
    position: relative;
    &:hover:after,
    &:active:after {
      width: 100%;
    }
    &:after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      width: 0%;
      transform: translateX(-50%);
      height: 2px;
      background: $accent;
      transition: .35s;
    }
  }
  .menu__item--active {
    border-bottom: 2px solid $accent;
    padding-bottom: 3px;
  }

  .hamburger {
    display: none;
    @include laptop {
      display: block;
      position: absolute;
      right: 50px;
      top: 30px;
      z-index: 10;
    }
    @include tablets {
      right: 20px;
    }
  }
  .hamburger .line {
    width: 35px;
    height: 3px;
    margin: 8px auto;
    background-color: #fff;
    display: block;
    transition: all .3s ease-in-out;
  }
  .hamburger:hover {
    cursor: pointer
  }
  .hamburger.is-active{
    transition: all 0.3s ease-in-out;
    transition-delay: 0.6s;
    transform: rotate(45deg);
  }
  .hamburger.is-active .line:nth-child(1),
  .hamburger.is-active .line:nth-child(3){
    transition-delay: 0.3s;
    background: #000;
  }

  .hamburger.is-active .line:nth-child(1){
    transform: translateY(11px);
  }
  .hamburger.is-active .line:nth-child(2){
    width: 0px;
  }
  .hamburger.is-active .line:nth-child(3){
    transform: translateY(-11px) rotate(90deg);
    background: #000;
  }
  .header__menu {
    @include laptop {
      display: none;
    }
  }
  .header__menu.is-active {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    position: absolute;
    top: 10%;
    left: 45%;
    transform: translateX(-50%);
    width: 100%;
    height: 90vh;
    background-color: $accent;
    padding: 20px;
    .menu__item {
      color: #000;
      font-size: 20px;
      margin-left: 0;
      margin-bottom: 50px;
      border: none;
    }
  }
  .header__hamburger {
    display: flex;
    justify-content: flex-end;
    position: relative;
  }
  .header__color {
    background: #fff;
    height: 110px;
    .logo__text-accent {
      color: $title-color;
    }
    .logo__text {
      color: #292929;
    }
    .hamburger .line {
      background: #292929;
    }
    .menu__item {
      color: $title-color;
    }
  }
</style>
<script>
export default {
  data () {
    return {
      nav: [
        { href: '/', name: 'About the shelter' },
        { href: '/pets', name: 'Our pets' },
        { href: '/help', name: 'To help the shelter' },
        { href: '/contacts', name: 'Contacts' }
      ],
      hamburger: this.$refs.hamburger
    }
  },
  methods: {
    toggleMenu () {
      const hamburger = this.$refs.hamburger
      const menu = this.$refs.menu

      hamburger.classList.toggle('is-active')
      menu.classList.toggle('is-active')
    }
  }
}
</script>
