import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export const ContactScreen = () => {
  const [submitState, setSubmitState] = useState("");
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitState("Enviando...");
    emailjs.sendForm("service_21o8iin", "template_8xnuzcf", formRef.current, "M0US94Oodpxzr5qtm").then(
      () => {
        setSubmitState("Enviado");
        setTimeout(() => {
          setSubmitState("");
        }, 4000);
      },
      (error) => {
        setSubmitState("Error");
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <div className="height-for-absolutes" />
      <div className="contact-container">
        <form ref={formRef} onSubmit={sendEmail}>
          <input name="name" type="text" className="contact-input" placeholder="Nombre" required />
          <input name="email" type="email" className="contact-input" placeholder="Mail" required />
          <textarea name="message" className="contact-input textarea" placeholder="Mensaje" required></textarea>
          <div className="contact-footer-container">
            <div className="submit-state">{submitState && submitState}</div>
            <button type="submit" className="contact-btn">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
