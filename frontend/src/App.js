import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/';
import { NextUIProvider } from "@nextui-org/react";
import Modal from './components/Modal';
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
