import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'

export const toyService = {
  query,
  remove,
  getById,
  getEmptyToy,
  save,
}

const TOYS_KEY = 'toyDB'
const BASE_URL = 'toy/'
_createToys()

function query(filterBy = '') {
  /*return storageService.query(TOYS_KEY)
        .then(todos => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                todos = todos.filter(todo => regex.test(todo.name))
            }
            return todos
        })*/
  return httpService.get(BASE_URL, filterBy)
}

function getById(toyId) {
  //return storageService.get(TOYS_KEY, toyId)
  return httpService.get(BASE_URL + toyId)
}

function remove(toyId) {
  //return storageService.remove(TOYS_KEY, toyId)
  return httpService.delete(BASE_URL + toyId)
}

function save(toy) {
    /*if (toy._id) {
        return storageService.put(TOYS_KEY, toy)
    } else {
        return storageService.post(TOYS_KEY, toy)
    }*/

  return toyToSave._id ?
    httpService.put(BASE_URL, toyToSave) :
    httpService.post(BASE_URL, toyToSave)
}

function getEmptyToy() {
  return {
    _id: '',
    name: '',
    price: null,
    labels: [],
    createdAt: null,
    inStock: null,
  }
}

function _filterToys(filterBy, toys) {
  if (!filterBy) return toys
  const { name } = filterBy

  const regex = new RegExp(name, 'i')
  toys = toys.filter(toys => regex.test(toys.name))

  return toys
}

function _createToys() {
  let toys = utilService.loadFromStorage(TOYS_KEY)

  if (!toys || !toys.length) {
    toys = [
      _createToy('Sunil Nevla', 100),
      _createToy('Zoe Trent (Rare)', 150),
      _createToy('Russell Ferguson', 50),
      _createToy('Hermit Crab', 50),
      _createToy('Poodle', 90),
      _createToy('Scottie', 110),
    ]
    utilService.saveToStorage(TOYS_KEY, toys)
  }
  return toys
}

function _createToy(name = '', price = 0, labels = []) {
  const toy = getEmptyToy()
  toy._id = utilService.makeId()
  toy.name = name
  toy.price = price
  toy.labels = labels
  toy.createdAt = Date.now()
  toy.inStock = true

  return toy
}