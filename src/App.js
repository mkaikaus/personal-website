import logo from './logo.svg';
// import './App.css';
import './output.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Calender from './components/Work/GitHubCalender';

function App() {
  return (
  //   <h1 class="text-3xl font-bold underline">
  //   Hello world!
  // </h1>
  <Router>
      {/* <Preloader load={load} /> */}
      {/* <div className="App" id={load ? "no-scroll" : "scroll"}></div> */}
      <div className="App">
        <Navbar />
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Calender />} />

          {/* <Route path="/project" element={<Projects />} />
          // <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
