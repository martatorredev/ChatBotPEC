import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
   return (
      <div className="App">
         <Header />
         <BrowserRouter>
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
            </Routes>
         </BrowserRouter>
         <Footer />
      </div>
   );
}

export default App;
