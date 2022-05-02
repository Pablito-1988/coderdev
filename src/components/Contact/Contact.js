import React from 'react';
import portada from '../../assets/img/contact.png';
import contactImg from '../../assets/img/contactImg.png';
import "./Contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const service = process.env.REACT_APP_SERVICE
  const template = process.env.REACT_APP_TEMPLATE
  const user = process.env.REACT_APP_USER
  
  function sendEmail(e){
    e.preventDefault();

emailjs.sendForm(service,template, e.target,user)
  .then((result) => {
    console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset()
  
 

}
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
              <form className="form"  onSubmit={sendEmail}>
                <div className='nameAndEmailContainer'>
                  <input className='nameInput' type="text" name='fullName'  placeholder='Nombre' required/>
                <input  className='emailInput'type="email" name='email' id="" placeholder='Correo electrónico' required />
                </div>
                <textarea name="" id="" cols="30" name='text' rows="10" placeholder='Mensaje' required></textarea>
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
