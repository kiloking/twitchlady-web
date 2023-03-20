import React from 'react'
import { Route, Routes,Outlet} from 'react-router-dom';

function PublicPageLayout() {
  return (
    <div className="App">
      <Outlet/>
    </div>
  )
}

export default PublicPageLayout
