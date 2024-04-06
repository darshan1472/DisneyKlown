import React  from "react";
import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";



function App() {
  return (
   <div className="app">
    
    <Router>
      <Header />
      <Routes>
        <Route path='/'  caseSensitive={false} element={<Home/>} />
        <Route path='/detail/:id'  caseSensitive={false} element={<Detail/>} />
        

      </Routes>
    </Router>


   </div>
  );
}

export default App;
