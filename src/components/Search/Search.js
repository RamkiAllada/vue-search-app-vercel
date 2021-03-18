import { mapActions } from "vuex";
export default {
  name: "Search",
  component: {},
  data() {
    return {
      searchTerm: ""
    };
  },
  created() {
    /**
     * getting the window location attribute and
     * fetching the results if search term is present
     *  or loading the bookmarked values from localstorage
     */
    const searchParam = window.location.href;
    const searchString = searchParam.split("=")[1];
    if (searchString) {
      this.fetchSearchResults(searchString);
    } else {
      this.fetchBookmarkedData();
    }
  },

  methods: {
    ...mapActions(["fetchSearchResults", "fetchBookmarkedData"]),
    searchData() {
      //encdoing the search term
      let encodedSearchTerm = encodeURIComponent(this.searchTerm);
      //disabling the search if search string is empty
      if (encodedSearchTerm.length > 0) {
        const reqConfig = {};
        reqConfig.params = {
          term: encodedSearchTerm
        };
        //calling the fetchSearchResults action
        this.fetchSearchResults(encodedSearchTerm);
        //setting the serach term as #value to location
        window.location = `#term=${encodedSearchTerm}`;
      }
    }
  }
};
