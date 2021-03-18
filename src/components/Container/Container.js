import { mapGetters } from "vuex";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation.vue";
import MainWrapper from "../MainWrapper/MainWrapper.vue";
import Spinner from "../Spinner/Spinner.vue";

export default {
  name: "Container",
  components: {
    HeaderNavigation,
    MainWrapper,
    Spinner
  },
  mounted() {},
  computed: {
    /*
     * getting spinner info to
     *  show and hide spinner
     */
    ...mapGetters(["spinnerInfo"])
  },
  watch: {},
  methods: {}
};
