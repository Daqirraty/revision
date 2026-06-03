import { createContext, useState } from "react";

// creata a store
export const ThemeStore = createContext();
const GlobalContext = ({ children }) => {
  const [theme, setTheme] = useState(true);

  return (
    <ThemeStore.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeStore.Provider>
  );
};

export default GlobalContext;
