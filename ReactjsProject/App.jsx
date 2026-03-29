import React,{useState,useEffect} from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./ReactjsProject/HomePage";
import ServicesPage from "./ReactjsProject/ServicesPage";
import Contactpage from "./ReactjsProject/ContactPage";
import AboutPage from "./ReactjsProject/AboutPage";

export default function App() {
  const [open, setOpen] = useState(false);


 

useEffect(() => {
  console.log(`menu state: ${open}`);
}, [open]);


  return (
    <BrowserRouter>
      <nav className="nav">
        <h2 className="food">FoOD CRAvINGS..</h2>
               <div className={`nav-links ${open ? "active" : ""}`}>
        <Link className="link" id="li" to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link className="link" id="li" to="/ServicesPage" onClick={() => setOpen(false)}>Services</Link>
        <Link className="link" id="li" to="/AboutPage" onClick={() => setOpen(false)}>About</Link>
        <Link className="link" id="li" to="/ContactPage" onClick={() => setOpen(false)}>Contact</Link>
            </div>
         
     <div className="menu-icon" id="btn"onClick={() => setOpen(!open)}>
  ☰
</div>

      </nav>

       <div className={`content ${open ? "hide-content" : ""}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ServicesPage" element={<ServicesPage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/ContactPage" element={<Contactpage />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}
