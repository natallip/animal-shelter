import Modal from '../../components/Modal/Modal.vue'
export default {
  data () {
    return {
      show: false,
      item: {},
      currentPage: 1,
      visiblItems: 8,
      pageRange: 2,
      currentItems: []
    };
  },
  components: {
    Modal
  },
  computed: {
    array () {
      return this.$store.state.pets
    },
    nextPage () {
      return this.currentPage + 1;
    },
    prevPage () {
      return this.currentPage - 1;
    },
    rangeStart () {
      let start = this.currentPage - this.pageRange;
      return (start > 0) ? start : 1;
    },
    rangeEnd () {
      let end = this.currentPage + this.pageRange;
      return (end < this.totalPages) ? end : this.totalPages;
    },
    pagesArray () {
      let pagesArray = [];
      for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
        pagesArray.push(i);
      }
      return pagesArray;
    },
    pages () {
      return this.chankPage(this.array, this.visiblItems);
    },
    totalPages () {
      return this.pages.length;
    }
  },
  mounted () {
    this.changePage(1);

  },
  methods: {
    setActiveClass (e) {
      let paginationItems = this.$refs.pagination.children

      if (!e.target.closest('.pagination__item')) return
      paginationItems = [...paginationItems]
      paginationItems.forEach(item => item.classList.remove('pagination__item--active'))
      e.target.classList.add('pagination__item--active')
    },
    showModal (item) {
      this.show = !this.show
      this.item = item
    },
    hasPrev () {
      return this.currentPage > 1;
    },
    hasNext () {
      return this.currentPage < this.totalPages;
    },
    hasFirst () {
      return this.rangeStart > 1;
    },
    hasLast () {
      return this.rangeEnd < this.totalPages;
    },
    changePage (i) {
      this.currentPage = i;
      this.currentItems = this.pages[i - 1];
    },
    chankPage (arr, chunk) {
      let i;
      let j;
      let tmp = [];

      for (i = 0, j = arr.length; i < j; i += chunk) {
        tmp.push(arr.slice(i, i + chunk));
      }
      return tmp;
    },
    fetchPage (i) {
      this.currentItems = this.pages[i - 1];
    }
  }
};
