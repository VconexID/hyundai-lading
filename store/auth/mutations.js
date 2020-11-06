export const SET_TOKEN = function (state, payload) {
  state.token = payload
}

export const REMOVE_TOKEN = function (state) {
  state.token = ''
}

export const SET_ROLE = function (state, payload) {
  state.role = parseInt(payload)
}

export const REMOVE_ROLE = function (state) {
  state.role = 0
}
