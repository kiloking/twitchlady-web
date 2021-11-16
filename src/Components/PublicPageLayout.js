import React from 'react'
import { Route, Routes} from 'react-router-dom';
//pages
import Home from '../Pages/Home';
import Sidebar from '../Pages/Sidebar'



//json
import data from '../App/data.json'

function PublicPageLayout() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path="/" exact element={<Home  data={data.data}/>}   /> 
      </Routes>
    </div>
  )
}

export default PublicPageLayout
