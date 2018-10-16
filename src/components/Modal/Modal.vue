<template lang="pug">
  .modal(ref="modal")
    .modal__bg
    .modal__block
      img.modal__close(@click="toggle", src="../../assets/img/icons/close.svg")
      .modal__content
        .modal__photo
          img.modal__img(:src="item.img")
        .modal__info
          .modal__name {{ item.name }}
          .modal__race {{ item.race }}
          .modal__text {{ item.text }}
          .modal__age.modal__li Age: {{ item.age }}
          .modal__inculations.modal__li Inoculations: {{ item.inoculations }}
          .modal__diseases.modal__li Diseases: {{ item.diseases }}
          .modal__parasites.modal__li Parasites: {{ item.parasites }}

</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .modal {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .modal__bg {
    width: 100%;
    height: 100%;
    background-color: #fafafa;
    position: absolute;
    top: 0;
    left: 0;
  }
  .modal__block {
    background-color: #fff;
    position: relative;
    border-radius: 9px;
    max-width: 970px;
    @include laptop {
      width: 270px;
    }
    &:hover {
      box-shadow: 0px 2px 30.1px 4.9px rgba(13, 13, 13, 0.04);
    }
  }
  .modal__close {
    position: absolute;
    top: -58px;
    right: -60px;
    width: 52px;
    height: 52px;
    padding: 15px;
    fill: $title-color;
    border: 2px solid $accent;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @include laptop {
      width: 40px;
      height: 40px;
      padding: 10px;
      top: -40px;
      right: -42px;
    }
    @include tablets {
      top: -42px;
      right: -30px;
    }
    &:hover {
      background-color: $accent;
    }
  }
  .modal__info {
    padding: 52px 44px 30px;
    @include laptop {
      padding: 20px;
    }
  }
  .modal__content {
    display: flex;
    @include laptop {
      flex-direction: column;
    }
  }
  .modal__photo {
    width: 50%;
    min-height: 270px;
    height: 100%;
    max-height: 470px;
    flex-shrink: 0;
    border-radius: 9px 0 0 9px;
    overflow: hidden;
    position: relative;
    @include laptop {
      width: 100%;
      min-height: 270px;
    }
  }
  .modal__img {
    height: 100%;
    width: 100%;
  }
  .modal__name {
    color: $title-color;
    font-family: "Times New Roman", serif;
    font-size: 35px;
    line-height: 50px;
    @include laptop {
      font-size: 30px;
      line-height: 40px;
    }
  }
  .modal__race {
    color: $title-color;
    font-family: "Times New Roman", serif;
    font-size: 22px;
    margin-bottom: 16px;
    @include laptop {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
  .modal__text {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-size: 15px;
    color: $text-color;
    margin-bottom: 20px;
    @include laptop {
      margin-bottom: 10px;
    }
  }
  .modal__li {
    position: relative;
    padding-left: 12px;
    margin-bottom: 6px;
    &:before {
      content: '';
      width: 4px;
      height: 4px;
      background: $accent;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 0px;
    }
  }
  .close {
    display: none;
  }
</style>
<script>
export default {
  data () {
    return {
      flag: false,
      showOk: false
    }
  },
  computed: {
    status () {
      return this.$store.state.statusMailSend
    }
  },
  props: {
    item: Object
  },
  methods: {
    toggle () {
      this.$refs.modal.classList.toggle('close')
      this.$emit('close')
    }
  }
}
</script>
