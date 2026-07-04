import { createContext, useContext, useState } from "react";

const CursorContext = createContext(null);

export function CursorProvider({ children }) {
  const [hovering, setHovering] = useState(false);
  return (
    <CursorContext.Provider value={{ hovering, setHovering }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  return useContext(CursorContext);
}
