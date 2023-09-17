import './App.css';
import Home from './components/Home/';
import Header from './components/Header'
import Footer from './components/Footer'
import Team from './components/Meet Team'
import {
  Routes, Route
} from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/team' element={<Team />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
