import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import { NextUIProvider } from "@nextui-org/react";
function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <Landing />
      </div>
    </NextUIProvider>
  );
}

export default App;
