import React from 'react';
import portada from '../../assets/img/contact.png';
import contactImg from '../../assets/img/contactImg.png';
import "./Contact.css";

const Contact = () => {
  return<>
  <div className='contactContiner'>
      <div className="portada">
          <img src={portada} className='portada'  alt="" />
      </div>
      <div className="contactMain">
        <div className="formWrapper">
            <h2 className='formTitle'>DEJAME TU MENSAJE</h2>
            <div className="formContainer">
              <p className='formQuote'>Utilice el siguiente formulario para enviarme su consulta</p>
              <form className="form">
                <div className='nameAndEmailContainer'>
                  <input className='nameInput' type="text"  placeholder='Nombre' required/>
                <input  className='emailInput'type="email" name="" id="" placeholder='Correo electrónico' required />
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder='Mensaje' required></textarea>
                <div className="submitButton">
                  <button className='button' type="submit">Entregar</button>
                </div>
                

                </form>
            </div>
        </div>
        <div className="contactInfo">
            <div className="info">
                <h3 className='dataTitle'>DATOS DE CONTACTO</h3>
                <p className='contactEmail'>Email: Jennypanichi@gmail.com</p>
                <p className='contactPhone'>Teléfono: +57 300 888 8888</p>

            </div>
            <div className="infoImg">
              <img src={contactImg} alt="" />
            </div>
        </div>
      </div>
  </div>
  </>;
};

export default Contact;
