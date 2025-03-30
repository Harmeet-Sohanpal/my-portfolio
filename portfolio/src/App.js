// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/navbar/Navbar';
// import Home from './components/home/Home';
// import Projects from './components/projects/Projects';
// import About from './components/about/About';
// import Services from './components/services/Services';
// import Contact from './components/contact/contact';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Home/>} />
//         <Route path='/projects' element={<Projects/>} />
//         <Route path='/about' element={<About/>} />
//         <Route path='/services' element={<Services/>} />
//         <Route path='/contact' element={<Contact/>} />
//       </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Services from './components/services/Services';
import Contact from './components/contact/contact';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function AnimatedRoutes() {
  const location = useLocation(); // This will now work correctly within BrowserRouter

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="page"
        unmountOnExit
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
