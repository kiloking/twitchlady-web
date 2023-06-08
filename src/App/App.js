import React from "react";
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import PublicPageLayout from '../Components/PublicPageLayout';
//pages
import Lady from '../Pages/Lady';
import TyperWriter from '../Pages/TyperWriter';
function App() {
 
  return (
    <BrowserRouter>
      <Routes> 
          <Route path="/"  element={<PublicPageLayout/>} >
            <Route path="/" exact element={<Lady/>}   /> 
            <Route path="typewriter"  element={<TyperWriter/>}   /> 
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
