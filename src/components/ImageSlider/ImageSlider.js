import React, { useState } from 'react'
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';

function ImageSlider() {
    const images= [img1,img2,img3,img4,img5]
    const [currentIndex,setCurrentIndex] = useState(0)
    function prevImageHandler(){
        setCurrentIndex((prevIndex)=>
            prevIndex===0 ? images.length-1 : prevIndex-1
        )
    }
    function nextImageHandler(){
        setCurrentIndex((prevIndex)=>
            prevIndex=== images.length-1 ?0 : prevIndex+1
        )
    }
  return (
    <div>
      <button onClick={prevImageHandler}>Prev</button>
      <img src={images[currentIndex]}/>
      <button onClick={nextImageHandler}>Next</button>
    </div>
  )
}

export default ImageSlider


