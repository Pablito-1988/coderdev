import React from "react";
import portada from "../Interviews/interview.png";

import contactImg from "../../assets/img/contactImg.png";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Contact = () => {
  const service = process.env.REACT_APP_SERVICE;
  const template = process.env.REACT_APP_TEMPLATE;
  const user = process.env.REACT_APP_USER;
  const { t } = useTranslation(["contact"]);


  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("es");
    }
  }, []);

  const [showModal, setShowModal] = useState(false);
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(service, template, e.target, user).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
    setShowModal(true);
  }
  return (
    <>
      <div className="contactContiner">
        <div className="portada">
          <img src={portada} className="portada" alt="" />
        </div>
        <div className="contactMain">
          <div className="formWrapper">
            <h2 className="formTitle">{t("tituloForm")}</h2>
            <div className="formContainer">
              {showModal && <Modal />}
              <p className="formQuote">
              {t("subtituloForm")}
              </p>
              <form className="form" onSubmit={sendEmail}>
                <div className="nameAndEmailContainer">
                  <input
                    className="nameInput"
                    type="text"
                    name="fullName"
                    placeholder={t("nombre")}
                    required
                  />
                  <input
                    className="emailInput"
                    type="email"
                    name="email"
                    id=""
                    placeholder={t("email")}
                    required
                  />
                </div>
                <textarea
                  id=""
                  cols="30"
                  name="text"
                  rows="10"
                  placeholder={t("mensaje")}
                  required
                ></textarea>
                <div className="submitButton">
                  <button className="button" type="submit">
                  {t("button")}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="contactInfo">
            <div className="info">
              <h3 className="dataTitle">{t("datosDeContacto")}</h3>
              <p className="contactEmail">E-mail: Jennypanichi@gmail.com</p>
              
            </div>
            <div >
              <img className="infoImg" src={contactImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
