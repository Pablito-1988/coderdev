import './sliderStyle.css'
import imagen1 from './slider1.jpg'
import imagen2 from './slider2.jpg'
import imagen3 from './slider3.jpg'

const Slider = () => {
  return (
    <>
     <div className="sliderContainer">
        <div className="slider">
            <ul>
               <li><img src={imagen1} alt='imagen1' className='imageSlider'></img></li>
               <li><img src={imagen2} alt='imagen2' className='imageSlider'></img></li>
               <li><img src={imagen3} alt='imagen3' className='imageSlider'></img></li>
            </ul>
         </div>   
     </div>
    </>
  )
}

export default Slider