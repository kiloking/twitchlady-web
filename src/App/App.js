import React from "react";
import './App.scss'
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import PublicPageLayout from '../Components/PublicPageLayout';
//pages
import Home from '../Pages/Home';
import TyperWriter from '../Pages/TyperWriter';
function App() {
 
  return (
    <BrowserRouter>
      <Routes> 
          <Route path="/"  element={<PublicPageLayout/>} >
            <Route path="/" exact element={<Home/>}   /> 
            <Route path="typewriter"  element={<TyperWriter/>}   /> 
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
