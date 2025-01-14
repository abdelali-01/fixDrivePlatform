import Home from "./pages/home/Home";
import "./app.css";
import Services from "./pages/services/Services";
import { Routes , Route, useLocation} from "react-router-dom"
import { animateScroll as scroller } from "react-scroll";
import { useEffect } from "react";
import Search from "./pages/search/Search";

function App() {
  const {pathname} = useLocation();

  useEffect(()=>{
    scroller.scrollTo(0 ,{
      smooth: true,
      duration: 800,
    });
  },[pathname])

  return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/services" element={<Services/>}/>
            <Route path="/search" element={<Search/>}/>
        </Routes>
  );
}

export default App;
