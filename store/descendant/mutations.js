export const SET_DESCENDANTS = function (state, payload) {
  state.descendants = payload
}

export const SET_DESCENDANT = function (state, payload) {
  state.descendant = payload
}

export const REMOVE_DESCENDANT = function (state) {
  state.descendant = {}
}

export const FILTER_DESCENDANT = (state, payload) => {
  state.descendants = state.descendants.filter((item) => {
    return item.id !== payload
  })
}

export const STORE_DESCENDANT = (state, payload) => {
  state.descendants.push(payload)
}
