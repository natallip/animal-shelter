<template lang="pug">
  footer.footer
    .container
      .footer__wrapper
        .footer__col
          .footer__title.title For questions  and suggestions
          .footer__item
            img.footer__icon(src="../../assets/img/icons/envelope.svg")
            .footer__text email@shelter.com
          .footer__item
            img.footer__icon(src="../../assets/img/icons/telephone.svg")
            .footer__text +13 674 567 75 54
        .footer__col
          .footer__title.title We are waiting  for your visit
          .footer__item
            img.footer__icon(src="../../assets/img/icons/pin.svg")
            .footer__text Boston, Central Street, 1st (Entrance from the store)
          .footer__item
            img.footer__icon(src="../../assets/img/icons/pin.svg")
            .footer__text London, South Park, 18st

</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .footer {
    background-image: url('../../assets/img/content/dog-footer.png'), radial-gradient(130% 100% at 0px 0px, #3d3028, #1b1b1d);
    background-repeat: no-repeat;
    background-position: 80% 100%;
    padding-top: 62px;
    padding-bottom: 36px;
    @include laptop {
      background-image: radial-gradient(130% 100% at 0px 0px, #3d3028, #1b1b1d);
    }
    @include tablets {
      padding-top: 30px;
      padding-bottom: 10px;
    }
  }
  .footer__wrapper {
    width: 63%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include laptop {
      width: 100%;
    }
    @include tablets {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .footer__title.title {
    color: #fff;
    margin-bottom: 30px;
    @include tablets {
      font-size: 24px;
      margin-bottom: 20px;
    }
  }
  .footer__col {
    flex-basis: 300px;
    @include tablets {
      flex-basis: 100%;
      margin-bottom: 20px;
    }
  }
  .footer__item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    @include tablets {
      margin-bottom: 15px;
    }
  }
  .footer__icon {
    width: 40px;
    height: 40px;
    margin-right: 20px;
    @include tablets {
      width: 20px;
      height: 20px;
    }
  }
  .footer__text {
    font-family: "Times New Roman", serif;
    font-size: 20px;
    letter-spacing: 1px;
    color: $accent;
    @include tablets {
      font-size: 18px;
      letter-spacing: 0;
    }
  }
</style>
<script></script>
