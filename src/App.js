import { AppContextProvider } from "./Contexts/AppContext";
import Parent from "./components/Parent";
import './App.css'

function App() {

  return (
    <AppContextProvider>
      <Parent />
    </AppContextProvider>
  );
}

export default App;
