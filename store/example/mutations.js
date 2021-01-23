export const SET_EXAMPLE = function (state, payload) {
  state.example = payload
}

export const REMOVE_EXAMPLE = function (state) {
  state.example = {}
}
