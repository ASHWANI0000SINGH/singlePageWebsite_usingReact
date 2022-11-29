import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";



import "./style/App.scss";
import "./style/Header.scss";
import "./style/Home.scss";
import "./style/Footer.scss";
import "./style/Contact.scss";
import "./style/Mediaquery.scss";





function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route  path="/" element={<Home/>}/> 
        <Route  path="/contact" element={<Contact/>}/> 
        <Route  path="/services" element={<Services/>}/> 
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>

  );
}

export default App;
