import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

export const ContactForm = () => {
  const [submitState, setSubmitState] = useState("");
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const clearForm = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitState("Enviando...");
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setSubmitState("Enviado");
          clearForm();
          setTimeout(() => {
            setSubmitState("");
          }, 4000);
        },
        (error) => {
          setSubmitState("Error");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="contact_form">
      <form ref={formRef} onSubmit={sendEmail}>
        <input className="contact_input" name="name" type="text" placeholder="Nombre" required ref={nameRef} />
        <input className="contact_input" name="email" type="email" placeholder="Mail" required ref={emailRef} />
        <textarea
          name="message"
          className="contact_input textarea"
          placeholder="Mensaje"
          required
          ref={messageRef}
        ></textarea>
        <div className="contact-footer-container">
          <div className="submit-state">{submitState && submitState}</div>
          <button type="submit" className="contact-btn">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
