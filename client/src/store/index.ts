import { createStore } from "vuex";
import axios from 'axios';

export default createStore({
  state: {
    languages: [],
    defaultInterface: ['ETH', 'Compliance'],
    currentPage: 'HomePage',
    userForm: {
      firstName: '',
      lastName: '',
      userName: '',
      title: '',
      emai: '',
      designation: ''
    }
  },
  getters: {
    languages: state => {
      return state.languages
    },
    defaultInterface: state => {
      return state.defaultInterface
    },
    currentPage: state => {
      return state.currentPage
    }
  },
  mutations: {
    setLanguages (state, data) {
      state.languages = data.data
    },
    setCurrentPage (state, data) {
      state.currentPage = data
    },
    setUserForm (state, data) {
      state.userForm
    }
  },
  actions: {
    requestLanguages: async ({ commit }) => {
      let languages = await axios.get('http://localhost:3000/languages')
        .catch((err) => {
          throw err
        })

      commit('setLanguages', languages)
    },
    requestSendUserData: async () => {
      let data = await axios.post('http://localhost:3000/users')

    }
  },
  modules: {},
});
