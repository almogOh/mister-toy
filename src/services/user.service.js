import { userStorageService } from "./user.storage.service.js"

const USER_KEY = 'loggedInUser'

export const userService = {
  getLoggedinUser,
  addActivity,
  save,
}

function addActivity(activity) {
  console.log('activity', activity)
  const user = getLoggedinUser()
  user.activities.push(activity)
  userStorageService.store(USER_KEY, user)
}

function save(user) {
  userStorageService.store(USER_KEY, user)
}

function getLoggedinUser() {
  const user = userStorageService.load(USER_KEY)
  if (user) return user

  _login()
  return userStorageService.load(USER_KEY)
}

function _login() {
  userStorageService.store(USER_KEY, {
    fullname: 'Puki Ben David',
    prefs: {
      color: '#ffffff',
      bgColor: '#0b7285',
    },
    activities: [
      { txt: 'Added a new Todo', at: 1523873242735 },
      { txt: 'Added a new Todo', at: 1657354690272 },
      { txt: 'Updated a Todo', at: 1657354745868 },
    ],
  })
}
