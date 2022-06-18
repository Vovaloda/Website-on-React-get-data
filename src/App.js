import Header from './components/Header/Header'
import Articles from './components/Articles/Articles';
import About from './About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<div><Header /> <Articles /></div>} /> 
        <Route path='/about' element={<div><Header /> <About /></div>} />
      </Routes>
    </Router>
  );
}

export default App;
