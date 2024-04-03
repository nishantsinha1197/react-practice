import React from 'react'
import Filter from './components/Filter'
import Counter from './components/Counter'
import List from './components/List'
import ImageSlider from './components/ImageSlider/ImageSlider'
import Checkbox from './components/Checkbox'
import Login from './components/Login'
import ProductCard from './components/Products'
import FilterProductCard from './components/FilterProductCard'

function App() {
  const list = ['Apple','Banana','Mango','Orange','Pineapple','watermelon']
  return (
    // <Filter list={list}/>
    // <Counter/>
    // <List/>
    // <ImageSlider/>
    // <Checkbox/>
    // <Login/>
    <ProductCard/>
    // <FilterProductCard/>
  )
}

export default App
