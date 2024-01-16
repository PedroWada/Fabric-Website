import About from "./pages/About";
import Home from "./pages/Home";
import ToDo from "./pages/ToDo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Counter from "./pages/Counter";
import Person from "./pages/Person";
import Excuser from "./pages/Excuser";
import Dog from "./pages/Dog";
import Country from "./pages/Country";



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/toDo" element={<ToDo/>}/>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/fetch" element={<Person/>}/>
          <Route path="/excuser" element={<Excuser/>}/>
          <Route path="/chuck" element={<Dog/>}/>
          <Route path="/country" element={<Country/>}/>
        </Routes>
      </Container>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
