import Home from "./pages/home/Home";
import "./app.css";
import Services from "./pages/services/Services";
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"

function App() {
  return (

      <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/services" element={<Services/>}/>
        </Routes>
      </Router>

  );
}

export default App;
