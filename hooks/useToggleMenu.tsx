import * as React from "react"

type StateType = boolean
type ContextType = {
  menuState: StateType
  setMenuState: React.Dispatch<React.SetStateAction<StateType>>
}

const MenuContext = React.createContext<ContextType | null>(null)

function useMenuState() {
  const context = React.useContext(MenuContext)
  if (!context) {
    throw new Error("useMenuState must be wrapped within MenuProvider wrapper.")
  }
  const { menuState, setMenuState } = context
  return [menuState, setMenuState] as const
}

const MenuProvider: React.FC = (props) => {
  const [menuState, setMenuState] = React.useState<StateType>(true)
  const value: ContextType = { menuState, setMenuState }

  return <MenuContext.Provider value={value} {...props} />
}

export { useMenuState, MenuProvider }
