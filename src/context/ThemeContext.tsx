import React, { createContext, useReducer } from "react";

interface ThemeState {
  isDarkMode: boolean;
}

type ThemeAction = { type: "TOGGLE_THEME" };

const INITIAL_STATE: ThemeState = {
  isDarkMode: false,
};

export const ThemeContext = createContext<{
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
}>({ state: INITIAL_STATE, dispatch: () => {} });

const reducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
