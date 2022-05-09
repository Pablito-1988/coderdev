import "./Me.css"
import MainImg from "../../assets/img/jennymain.jpeg"

const Me = () => {
  return (
    <>
    <div className="aboutContainer">
        <h1 className="aboutTitle">Conocé mas acerca de mí</h1>
        <div className="aboutInfo">
            <div className="meImage">
                <img src={MainImg} alt="Jenny Main"  className="aboutMainImage"/>
            </div>
            <p className="aboutText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vero quod perspiciatis tempora quos repellat iure ducimus nesciunt iste culpa sed enim aliquid placeat, laudantium itaque veritatis tenetur illo nisi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorem itaque, porro atque tempora facere corporis consectetur a. Reiciendis necessitatibus tempora quam accusamus magni placeat modi iste perferendis illum corporis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iure itaque animi. Deserunt ducimus consequuntur cumque saepe ipsa architecto nobis rerum voluptates ad. Porro asperiores corrupti tenetur placeat! Modi, quasi!</p>
        </div>
        <div className="workResume">
            <h1 className="workTitle">Empresas con las que trabajé</h1>
            <div className="logos">

            </div>

        </div>
        <div className="galery">

        </div>
        
    </div>    
    </>
  )
}

export default Me