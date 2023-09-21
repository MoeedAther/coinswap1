import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbarr from "./Navbarr"
import { Container } from 'react-bootstrap';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Blog from './Blog';
// import Faq from './Faq';  
import Viewoffer from './Viewoffer';
import Swap from './Swap'
import Swaptwo from './Swaptwo' 
import ParticlesBackground from './compo/ParticlesBackground';
import AllCurrencies from './AllCurrencies';
import FAQPage from './Faq2';

import Works from './Works';
import Contactus from './Contactus';
// import Copy from './Copy';

function App() {
  return (


     <Router>
          <Routes> 
            <Route exact path="/" element={[<Navbarr/>,<Home />,<Footer /> ]} />
            <Route exact path="/About" element={[<Navbarr/>, <About />,<Footer />]} />
            <Route exact path="/Footer" element={[<Navbarr/>, <About />, <Footer />]} />
            <Route exact path="/Blog" element={[<Navbarr/>, <Blog />, <Footer />]} />
            {/* <Route exact path="/Faq" element={[<Navbarr/>, <Faq />, <Footer />]} /> */}
            <Route exact path="/viewoffer" element={[<Navbarr/>, <Viewoffer />, <Footer />]} />
            <Route exact path="/allCurrencies" element={[<Navbarr/>, <AllCurrencies />, <Footer />]} />
            <Route exact path="/swap" element={[<Navbarr/>, <Swap />, <Footer />]} />
            <Route exact path="/swaptwo" element={[<Navbarr/>, <Swaptwo />, <Footer />]} />
            <Route exact path="/Faqs" element={[<Navbarr/>, <FAQPage />, <Footer />]} />
            <Route exact path="/works" element={[<Navbarr/>, <Works />, <Footer />]} />
            <Route exact path="/contactus" element={[<Navbarr/>, <Contactus />, <Footer />]} />

            {/* <Route exact path="/copy" element={[<Navbarr/>, <Copy />, <Footer />]} /> */}
          </Routes>
           
      </Router>
      




  );
}
export default App;