import { createContext, useContext, useState } from "react";

const WindowContext = createContext({
  title: "project title goes here",
  description: "provide a description for the project here",
  pics: [],
  projectUrl: "",
  gitHubUrl: "",
  showProjectWindow: false,
});
export default WindowContext;

export function WindowProvider({ children }) {
  const [showProjectWindow, setShowProjectWindow] = useState(true);

  function closeWindow() {
    setShowProjectWindow(false);
    // console.log("prop function firing");
  }

  return (
    <WindowContext.Provider value={{ showProjectWindow, setShowProjectWindow }}>
      {children}
    </WindowContext.Provider>
		
  );
}
