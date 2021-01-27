export const SET_ANCESTOR = function (state, payload) {
  state.ancestor = payload
}

export const REMOVE_ANCESTOR = function (state) {
  state.ancestor = {}
}
