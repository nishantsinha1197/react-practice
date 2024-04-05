import React from 'react'
import Filter from './components/Filter'
import Counter from './components/Counter'
import List from './components/List'
import ImageSlider from './components/ImageSlider/ImageSlider'
import Checkbox from './components/Checkbox'
import Login from './components/Login'
import ProductCard from './components/Products'
import FilterProductCard from './components/FilterProductCard'
import {BrowserRouter, Routes,Route,Link } from 'react-router-dom'
import Home from './components/MultiPage/Home'
import About from './components/MultiPage/About'
import Project from './components/MultiPage/Project'
import PageNotFound from './components/MultiPage/PageNotFound'

function App() {
  const list = ['Apple','Banana','Mango','Orange','Pineapple','watermelon']
  return (
    // <Filter list={list}/>
    // <Counter/>
    // <List/>
    // <ImageSlider/>
    // <Checkbox/>
    // <Login/>
    // <ProductCard/>
    // <FilterProductCard/>
   <>
   <BrowserRouter>
   <div style={{width:100 + 'vw', height:80, backgroundColor:'pink'}}>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/project'>Project</Link>
   </div>
    
    <Routes>
        <Route path='/:name' Component= {Home} />
        <Route path='/about' Component= {About} />
        <Route path='/project' Component= {Project} />
        <Route path='/*' Component= {PageNotFound} />
    </Routes>
    </BrowserRouter>
   </>
    
  )
}

export default App
