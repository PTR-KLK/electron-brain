import { createStore, compose } from "redux"

const initialState = { graph: true }

const reducer = (state, action) => {
  if (action.type === `TOGGLE_GRAPH`) {
    return Object.assign({}, state, {
      graph: !state.graph,
    })
  }
  return state
}

const initStore = () => {
  const windowGlobal = typeof window !== "undefined" && window

  const devtools =
    process.env.NODE_ENV === "development" && windowGlobal.devToolsExtension
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f

  const store = createStore(reducer, initialState, compose(devtools))

  return store
}

export default initStore
