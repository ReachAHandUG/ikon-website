import React, { createContext, useReducer, useContext } from "react"

const defaultState = {
  show_logo: "hide",
  show_menu: "hide",
  active_section: "",
  show_category: [],
  fetch_category: 0,
}

const GlobalStateContext = createContext(defaultState)
const GlobalDispatchContext = createContext()

const globalReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_LOGO": {
      return {
        ...state,
        show_logo: action.value,
      }
    }

    case "FETCH_CATEGORY": {
      return {
        ...state,
        fetch_category: action.value,
      }
    }

    case "SHOW_CATEGORY": {
      return {
        ...state,
        show_category: action.value,
      }
    }

    case "SET_ACTIVE_SECTION": {
      return {
        ...state,
        active_section: action.value,
      }
    }

    case "SHOW_MENU": {
      return {
        ...state,
        show_menu: action.value,
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const Provider = ({ children }) => {
  let [state, dispatch] = useReducer(globalReducer, defaultState)

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
export const useGlobalStateContext = () => useContext(GlobalStateContext)
