import { mapGetters, mapActions } from "vuex";

export default {
  name: "SearchTile",
  data() {
    return {};
  },
  props: {
    section: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapGetters(["allResults"])
  },
  created() {},
  methods: {
    ...mapActions(["setFavourites"]),
    bookmarkFavourites(id) {
      //calling the setFavourites action
      this.setFavourites(id);
    }
  }
};
