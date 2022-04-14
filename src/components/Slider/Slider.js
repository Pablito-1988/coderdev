import './sliderStyle.css'
import imagen1 from './slider1.jpg'
import imagen2 from './slider2.jpg'
import imagen3 from './slider3.jpg'
import { useState } from 'react'

const Slider = () => {
   const images = [{slider : imagen1}, {slider : imagen2}, {slider : imagen3}]

  const [slideIndex, setSlideIndex] = useState(1)
  const moveDot = index => {
    setSlideIndex(index)
}

  return (
    <>
     <div className="sliderContainer">
        <div className="slider">
            <ul>
                {images.map((image, index) => {
                    
                    return (
                        <li key={image.index} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                            <img src={image.slider} alt="Jenny Panichi" className="logoImg"/>
                        </li>
                    )
                })}
              <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>    
            </ul>
           
         </div>
         
     </div>
    </>
  )
}

export default Slider