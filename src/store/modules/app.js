import Cookies from "js-cookie";
const state = {
  sidebar: {
    opened: !+Cookies.get("sidebarStatus"),
    withoutAnimation: false
  },
  device: "deskTop"
};
const mutations = {
  TOGGLE_SIDEBAR: state => {
    if (state.sidebar.opened) {
      Cookies.set("sidebarStatus", 1);
    } else {
      Cookies.set("sidebarStatus", 0);
    }
    state.sidebar.opened = !state.sidebar.opened;
    state.sidebar.withoutAnimation = false;
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set("sidebarStatus", 0);
    state.sidebar.opened = false;
    state.sidebar.withoutAnimation = withoutAnimation;
  }
};
const actions = {
  toggleSideBar({ commit }) {
    commit("TOGGLE_SIDEBAR");
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit("CLOSE_SIDEBAR", withoutAnimation);
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};