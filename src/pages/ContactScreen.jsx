import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export const ContactScreen = () => {
  const [submitState, setSubmitState] = useState("");
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const clearForm = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitState("Enviando...");
    emailjs.sendForm("service_21o8iin", "template_8xnuzcf", formRef.current, "M0US94Oodpxzr5qtm").then(
      () => {
        setSubmitState("Enviado");
        clearForm();
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
          <input name="name" type="text" className="contact-input" placeholder="Nombre" required ref={nameRef} />
          <input name="email" type="email" className="contact-input" placeholder="Mail" required ref={emailRef} />
          <textarea name="message" className="contact-input textarea" placeholder="Mensaje" required ref={messageRef}></textarea>
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
