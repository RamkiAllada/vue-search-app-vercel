import { mapGetters } from "vuex";
import searchTile from "../SearchTile/SearchTile.vue";
export default {
  name: "MainWrapper",
  components: {
    searchTile
  },
  data() {
    return {
      sections: []
    };
  },
  computed: {
    //getting the results from store
    ...mapGetters(["allResults"])
  },
  created() {},
  mounted() {
    /**
     *  loading the results on load from
     * the local storage or from url
     */
    this.$nextTick(() => {
      this.filterResults(this.allResults);
    });
  },
  watch: {
    allResults: function(val) {
      /**triggering the filterresults method
       * if the allresults change
       */
      this.filterResults(val);
    }
  },
  methods: {
    filterResults(newVal) {
      /**preparing the array of keys from
       * the object returned from allResults
       */
      this.sections = Object.keys(newVal);
    }
  }
};
