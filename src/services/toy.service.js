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

const KEY = 'toy_DB'
const BASE_URL = 'toy/'
_createToys()

function query(filterBy) {
  // return storageService.query(KEY).then(toys => {
  //   return _filterToys(filterBy, toys)
  // })
  return httpService.get(BASE_URL, filterBy)
}

function getById(toyId) {
  // return storageService.get(KEY, id)
  return httpService.get(BASE_URL + toyId)
}

function remove(toyId) {
  // return storageService.remove(KEY, toyId)
  return httpService.delete(BASE_URL + toyId)
}

function save(toyToSave) {
  // return toyToSave._id ?
  //   storageService.put(KEY, toyToSave) :
  //   storageService.post(KEY, toyToSave)

  return toyToSave._id ?
    httpService.put(BASE_URL, toyToSave) :
    httpService.post(BASE_URL, toyToSave)
}

function getEmptyToy() {
  return {
    _id: '',
    name: '',
    price: '',
    labels: [],
    createdAt: Date.now(),
    inStock: true,
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
  let toys = JSON.parse(localStorage.getItem(KEY))

  if (!toys || !toys.length) {
    toys = [
      _createToy('Lego Car', 100),
      _createToy('Baby Doll', 50),
      _createToy('Cowboy hat', 20),
    ]
    localStorage.setItem(KEY, JSON.stringify(toys))
  }
  return toys
}

function _createToy(name, price) {
  return {
    _id: utilService.makeId(),
    name,
    price,
    labels: [],
    createdAt: Date.now(),
    inStock: true,
  }
}