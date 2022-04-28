import React from 'react'
import { Route, Routes,Outlet} from 'react-router-dom';
// //pages
// import Home from '../Pages/Home';
// import TyperWriter from '../Pages/TyperWriter';


function PublicPageLayout() {
  return (
    <div className="App">
      <Outlet/>
    </div>
  )
}

export default PublicPageLayout
