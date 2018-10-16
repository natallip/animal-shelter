import Modal from '../../components/Modal/Modal.vue'
export default {
  data () {
    return {
      indexActive: 0,
      show: false,
      item: {},
      array: [
        {icon: 'food', text: 'Pet food'},
        {icon: 'ambulance', text: 'Transportation'},
        {icon: 'ball', text: 'Toys'},
        {icon: 'bowl', text: 'Bowls and cups'},
        {icon: 'shampoo', text: 'Shampoos'},
        {icon: 'pills', text: 'Vitamins'},
        {icon: 'syringe', text: 'Medicines'},
        {icon: 'leash', text: 'Collars / leashes'},
        {icon: 'cat', text: 'Sleeping area'}
      ]
    }
  },
  components: {
    Modal
  },
  computed: {
    pets () {
      return this.$store.state.pets
    }
  },
  methods: {
    moveSlider (type) {
      const slider = this.$refs.slider
      let itemWidth = slider.firstChild.offsetWidth + parseInt(getComputedStyle(slider.firstChild).marginRight) * 2
      type === 'next' ? this.indexActive += 1 : this.indexActive -= 1
       if (this.indexActive < 0) this.indexActive = this.pets.length - 3
       if (this.indexActive > this.pets.length - 3) this.indexActive = 0
       slider.style.left = this.indexActive * (-itemWidth) + 'px'
    },
    showModal (item) {
      this.show = !this.show
      this.item = item
    }
  }
}
