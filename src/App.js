import './App.css';
import {Route, Routes} from 'react-router-dom'
import React from 'react'
import NavBar from './components/NavBar.js';
import News from './components/News.js';

document.body.style.backgroundColor='white';
const toggleMode= ()=>{
  if(document.body.style.backgroundColor === 'white'){
     document.body.style.backgroundColor = '#6c757d';
 }
  else
      document.body.style.backgroundColor = 'white';
}
 const App = ()=>{
  const apiKey = process.env.REACT_APP_NEWS_API

    return (
      <div>
        <NavBar toggleMode={toggleMode}/>
        <Routes>
            <Route path='/' element={<News title='NewsInfo - Top Headlines'  apiKey={apiKey} country="us" category="general"/>}/>
            <Route exact path='/sports' element={<News key="sports" title='NewsInfo - Top Sports News'  apiKey={apiKey} country="us" category="sports"/>}/>
            <Route exact path='/health' element={<News key="health" title='NewsInfo - Top Health News'  apiKey={apiKey} country="us" category="health"/>}/>
            <Route exact path='/business' element={<News key="business" title='NewsInfo - Top Business News'  apiKey={apiKey} country="us" category="business"/>}/>
            <Route exact path='/technology' element={<News key="technology" title='NewsInfo - Top Technology News'  apiKey={apiKey} country="us" category="technology"/>}/>
            <Route exact path='/science' element={<News key="science" title='NewsInfo - Top Science News'  apiKey={apiKey} country="us" category="science"/>}/>
            <Route exact path='/entertainment' element={<News key="entertainment" title='NewsInfo - Top Entertainment News'  apiKey={apiKey} country="us" category="entertainment"/>}/>
        </Routes>
      </div>
    )
}

export default App;