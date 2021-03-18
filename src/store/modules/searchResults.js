import axios from "axios";
import endPointURLS from "../../endpoints";

// Complete application state
const state = {
  searchResults: {},
  spinnerStatus: false
};
const getters = {
  allResults: state => state.searchResults,
  spinnerInfo: state => state.spinnerStatus
};
const actions = {
  async fetchSearchResults({ commit }, searchKey) {
    commit("SHOW_SPINNER");
    //fetching the search term
    const response = await axios.get(
      `${endPointURLS.baseURL}${endPointURLS.search}?term=${searchKey}`
    );
    commit("GET_SEARCH_RESULTS", response.data);
    commit("HIDE_SPINNER");
  },
  setFavourites({ commit }, id) {
    commit("BOOKMARK_FAVS", id);
  },
  fetchBookmarkedData({ commit }) {
    commit("GET_BOOKMARKED_DATA");
  }
};
const mutations = {
  SHOW_SPINNER: state => {
    state.spinnerStatus = true;
  },
  HIDE_SPINNER: state => {
    state.spinnerStatus = false;
  },
  GET_SEARCH_RESULTS: (state, searchResults) => {
    //getting favourites available in local storage
    let locallySavedData =
      JSON.parse(localStorage.getItem("bookmarkFavs")) || {};
    // traversing through all keys
    for (let prop in searchResults) {
      searchResults[prop].map(ele => {
        // setting a key isBookmarked to false by default
        ele.isBookmarked = false;
        //checking if favourites available in local storage
        if (
          Object.keys(locallySavedData).length !== 0 &&
          locallySavedData[prop]
        ) {
          /**
           * traversing through local storage
           * data and setting isBookmarked to true
           */
          locallySavedData[prop].forEach(element => {
            if (ele.id === element.id) {
              ele.isBookmarked = true;
            }
          });
        }
      });
    }
    //setting search results to state
    state.searchResults = searchResults;
  },
  GET_BOOKMARKED_DATA: state => {
    let locallySavedData =
      JSON.parse(localStorage.getItem("bookmarkFavs")) || {};
    //setting locallySavedData to state
    state.searchResults = locallySavedData;
  },
  BOOKMARK_FAVS: (state, id) => {
    const searchData = state.searchResults;
    let locallySavedData =
      JSON.parse(localStorage.getItem("bookmarkFavs")) || {};
    for (let prop in searchData) {
      searchData[prop].map(el => {
        //checking if the traversed element id is equal to clicked tile id
        if (el.id === id) {
          //toggling the bookmarked value
          el.isBookmarked = !el.isBookmarked;
          //checking if the key is availble
          if (!locallySavedData[`${prop}`]) {
            //creating an array
            locallySavedData[`${prop}`] = [];
            locallySavedData[`${prop}`].push(el);
          } else {
            if (!el.isBookmarked) {
              //filtering the objects matching to the clicked id
              locallySavedData[`${prop}`] = locallySavedData[`${prop}`].filter(
                element => element.id !== id
              );
              //deleting the empty array
              if (locallySavedData[`${prop}`].length === 0) {
                delete locallySavedData[`${prop}`];
              }
            } else {
              locallySavedData[`${prop}`].push(el);
            }
          }
          localStorage.setItem(
            "bookmarkFavs",
            JSON.stringify(locallySavedData)
          );
        }
      });
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
