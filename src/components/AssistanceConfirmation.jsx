import React, { useState } from "react";
import "./AssistanceConfirmation.css";

const AssistanceConfirmation = () => {
  const initialForm = {
    name: "",
    surname: "",
    comments: "",
  };
  const [contactForm, setContactForm] = useState(initialForm);
  const [feelback, setFeelback] = useState(false);

  const handleSubmitInContactForm = (e) => {
    e.preventDefault();
    fetch("https://formsubmit.co/ajax/aegm0143@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    });
    setContactForm(initialForm);
    setFeelback(true);
    setTimeout(function () {
      setFeelback(false);
    }, 2000);
  };
  const handleChangeInContactForm = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="assistanceConfirmationContainer">
      <img src="/5.jpg" alt="bg" />
      <p>Por favor confirmar asistencia antes del dia 13 de Marzo del 2023.</p>
      <p id={`${feelback ? "feelback" : "none"}`}>
        <i>Enviado </i>
        <img src="/send.svg" alt="" />
      </p>
      <section className="contactForm">
        <form action="aegm0143@gmail.com" method="POST" className="contact-form" onSubmit={handleSubmitInContactForm}>
          <input
            type="text"
            name="name"
            placeholder="Ingresa tu nombre *"
            title="Nombre sólo acepta letras y espacios en blanco"
            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
            onChange={handleChangeInContactForm}
            value={contactForm.name}
            required
          />
          <input
            type="text"
            name="surname"
            placeholder="Ingresa tu apellido *"
            title="Nombre sólo acepta letras y espacios en blanco"
            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
            onChange={handleChangeInContactForm}
            value={contactForm.surname}
            required
          />
          <textarea
            name="comments"
            cols="50"
            rows="10"
            placeholder="Usted va a asistir al civil, ceremonia y fiesta?. Aclarar si va a asistir a una en especifico o a todas. *"
            onChange={handleChangeInContactForm}
            value={contactForm.comments}
          ></textarea>
          <button className="btn" type="submit">
            Confirmar asistencia
          </button>
        </form>
      </section>
    </div>
  );
};

export default AssistanceConfirmation;
