import { toyService } from '../../services/toy.service.js'

export const toyStore = {

  state: {
    toys: [],
    filterBy: {
      inStock: '',
      labels: [],
      search: '',
      sortBy: 'name',
    },
  },
  getters: {
    toysToDisplay({ toys }) {
      return toys
    }
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys
    },
    removeToy(state, { toyId }) {
      const idx = state.toys.findIndex(toy => toy._id === toyId)
      state.toys.splice(idx, 1)
    },
    addToy(state, { toy }) {
      state.toys.unshift(toy)
    },
    updateToy(state, { toy }) {
      const idx = state.toys.findIndex(t => t._id === toy._id)
      state.toys.splice(idx, 1, toy)
    },
    setFilterBy(state, { filterBy }) {
      state.filterBy = filterBy
    },
  },
  actions: {
    loadToys({ commit }, { filterBy }) {
      return toyService.query(filterBy)
        .then(toys => {
          commit({ type: 'setToys', toys })
        })
        .catch(err => {
          console.log(err)
        })
    },
    removeToy({ commit }, { toyId }) {
      return toyService.remove(toyId)
        .then(() => {
          commit({ type: 'removeToy', toyId })
        })
        .catch((err) => {
          console.error('Cannot remove toy', err)
          throw err
        })
    },
    saveToy({ commit }, { toy }) {
      const actionType = toy._id ? 'updateToy' : 'addToy'
      return toyService.save(toy)
        .then(savedToy => {
          commit({ type: actionType, toy: savedToy })
        })
        .catch((err) => {
          console.error('Cannot save toy', err)
          throw err
        })
    },
    setFilter({ commit }, { filterBy }) {
      commit({ type: 'setFilterBy', filterBy })
      toyService.query(filterBy)
           .then(toys => {
                commit({ type: 'setToys', toys })
           })
           .catch((err) => {
                console.error('Cannot set filter', err)
                throw err
           })
    },
  },
}
