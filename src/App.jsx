import React, { useEffect, useRef, useState } from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";
import useFetch from "./hooks/useFetch";
import { ContactForm } from "./components/contactForm";
import favicon from "./assets/favicon.svg";
import profile from "./assets/profile.jpg";
import "./App.css";

export const App = () => {
  const { data, error, loading } = useFetch("https://giuliannt.github.io/api/myProjects.json");
  const { height, width } = useWindowDimensions();
  const projectSectionRef = useRef(null);
  const [stylesState, setStylesState] = useState({
    navbar: {
      about_me_active: {
        color: "rgb(var(--color-cyan))",
      },
      projects_active: {
        color: "rgb(var(--color-light))",
      },
      contact_active: {
        color: "rgb(var(--color-light))",
      },
    },
    about_me: {
      opacity: 1,
    },
    projects: {
      left: "0px",
      position: "absolute",
    },
    contact: {
      contact_box: {
        left: "0%",
      },
      social_box: {
        left: "0%",
      },
    },
  });

  /* useEffect(() => {
    console.log("effect");
   
    const audio = new Audio("https://giuliannt.github.io/api/sound.mp3");
    audio.play();
  }, [])
   */

  useEffect(() => {
    const handleScroll = () => {
      const widthProjectSection = projectSectionRef.current?.scrollWidth;
      const { scrollTop } = document.documentElement;
      /* 0 to 1 about_me | 1 to 3 projects | 3 to 4 contact */
      const xd = scrollTop / height;
      if (xd < 1) {
        handleOnClickActive("about_me");
        setStylesState((prevState) => ({
          ...prevState,
          about_me: {
            opacity: 2 - xd * 2,
          },
          projects: {
            left: `${-widthProjectSection + width}px`,
            position: "absolute",
          },
        }));
      } else if (xd >= 1) {
        xd < 3 ? handleOnClickActive("projects") : handleOnClickActive("contact");
        setStylesState((prevState) => ({
          ...prevState,
          about_me: {
            opacity: 0,
          },
          projects: {
            left: `${
              (xd * widthProjectSection) / (width >= 768 ? 3 : 2) -
              widthProjectSection / (width >= 768 ? 3 : 2) -
              widthProjectSection +
              width
            }px`,
            position: "fixed",
          },
        }));
        if (xd >= 3) {
          setStylesState((prevState) => ({
            ...prevState,
            contact: {
              contact_box: {
                transform: `translateX(${(xd - 3) * 100 - 100}%)`,
                opacity: xd - 3,
              },
              social_box: {
                transform: `translateX(${-((xd - 3) * 100 - 100)}%)`,
                opacity: xd - 3,
              },
            },
          }));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [height, width, data]);

  const handleOnClickActive = (thisSection) => {
    setStylesState((prevState) => ({
      ...prevState,
      navbar: {
        about_me_active: {
          color: thisSection === "about_me" ? "rgb(var(--color-cyan))" : "rgb(var(--color-light))",
        },
        projects_active: {
          color: thisSection === "projects" ? "rgb(var(--color-cyan))" : "rgb(var(--color-light))",
        },
        contact_active: {
          color: thisSection === "contact" ? "rgb(var(--color-cyan))" : "rgb(var(--color-light))",
        },
      },
    }));
  };

  const moveWindowToBottom = () => {
    window.scrollTo({
      top: height * 4,
      behavior: "smooth",
    });
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong</div>;

  return (
    <div className="container_app" style={{ height: height * 5 }}>
      <nav id="navbar">
        <div className="nav_container">
          <ul className="nav_list">
            <li>
              <a className="nav_link" style={stylesState.navbar.about_me_active} href="#about_me">
                Sobre Mí
              </a>
            </li>
            <li>
              <a className="nav_link" style={stylesState.navbar.projects_active} href="#projects">
                Proyectos
              </a>
            </li>
            <li>
              <a className="nav_link" style={stylesState.navbar.contact_active} href="#contact">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section id="about_me">
        <div className="about_me_container" style={stylesState.about_me}>
          <canvas id="canvas" />
          <div className="profile_pic_bg">
            <div className="profile_pic_bg_item" />
          </div>
          <img className="profile_pic" src={profile} alt="profile" />
          <h1 className="title">
            <span>G</span>
            <span>i</span>
            <span>u</span>
            <span>l</span>
            <span>i</span>
            <span>a</span>
            <span>n</span>
            <span>o</span> <span>C</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>i</span>
          </h1>
          <h2 className="subtitle">
            <span>R</span>
            <span>e</span>
            <span>a</span>
            <span>c</span>
            <span>t</span> <span>D</span>
            <span>e</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <span>o</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
          </h2>
          {/*   <img className="about_me_icon" src={favicon} alt="icon" /> */}
          <div className={`info_text_container ${stylesState.about_me.textClassName}`}>
            <p className="info_text">
              Empecé a estudiar programación en 2021. En el año 2022 me enfoqué principalmente en el desarrollo
              Front-end utilizando React.
            </p>
            <p className="info_text">
              Soy de Resistencia, Argentina.
              <br />
              Tengo 21 años.
            </p>
            <p className="info_text">
              Me gusta programar, diseñar planos 3D en SketchUp, juntarme con amigos, jugar padel, los videojuegos y
              andar en bici.
            </p>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="carousel" style={stylesState.projects} ref={projectSectionRef}>
          {data &&
            data.projects.map((pjt) => (
              <div
                className={`project_box ${pjt.id % 2 === 0 ? "translateYPlus" : "translateYMins"}`}
                style={{ backgroundImage: `url(${pjt.img})` }}
                key={pjt.id}
              >
                {/*  <img className="project_box_img" src={pjt.img} alt="" /> */}
                <div className="project_box_container">
                  <h2 className="project_title">{pjt.title}</h2>
                  <p className="project_text">{pjt.description}</p>
                  <div className="project_link_container">
                    <a className="project_link" aria-label="Web" href={pjt.hrefWeb}>
                      <svg className="project_link_svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3.51211712,15 L8.17190229,15 C8.05949197,14.0523506 8,13.0444554 8,12 C8,10.9555446 8.05949197,9.94764942 8.17190229,9 L3.51211712,9 C3.18046266,9.93833678 3,10.9480937 3,12 C3,13.0519063 3.18046266,14.0616632 3.51211712,15 L3.51211712,15 Z M3.93551965,16 C5.12590433,18.3953444 7.35207678,20.1851177 10.0280093,20.783292 C9.24889451,19.7227751 8.65216136,18.0371362 8.31375067,16 L3.93551965,16 L3.93551965,16 Z M20.4878829,15 C20.8195373,14.0616632 21,13.0519063 21,12 C21,10.9480937 20.8195373,9.93833678 20.4878829,9 L15.8280977,9 C15.940508,9.94764942 16,10.9555446 16,12 C16,13.0444554 15.940508,14.0523506 15.8280977,15 L20.4878829,15 L20.4878829,15 Z M20.0644804,16 L15.6862493,16 C15.3478386,18.0371362 14.7511055,19.7227751 13.9719907,20.783292 C16.6479232,20.1851177 18.8740957,18.3953444 20.0644804,16 L20.0644804,16 Z M9.18440269,15 L14.8155973,15 C14.9340177,14.0623882 15,13.0528256 15,12 C15,10.9471744 14.9340177,9.93761183 14.8155973,9 L9.18440269,9 C9.06598229,9.93761183 9,10.9471744 9,12 C9,13.0528256 9.06598229,14.0623882 9.18440269,15 L9.18440269,15 Z M9.3349823,16 C9.85717082,18.9678295 10.9180729,21 12,21 C13.0819271,21 14.1428292,18.9678295 14.6650177,16 L9.3349823,16 L9.3349823,16 Z M3.93551965,8 L8.31375067,8 C8.65216136,5.96286383 9.24889451,4.27722486 10.0280093,3.21670804 C7.35207678,3.81488234 5.12590433,5.60465556 3.93551965,8 L3.93551965,8 Z M20.0644804,8 C18.8740957,5.60465556 16.6479232,3.81488234 13.9719907,3.21670804 C14.7511055,4.27722486 15.3478386,5.96286383 15.6862493,8 L20.0644804,8 L20.0644804,8 Z M9.3349823,8 L14.6650177,8 C14.1428292,5.03217048 13.0819271,3 12,3 C10.9180729,3 9.85717082,5.03217048 9.3349823,8 L9.3349823,8 Z M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z" />
                      </svg>
                    </a>
                    <a className="project_link" aria-label="Github" href={pjt.hrefGithub}>
                      <svg className="project_link_svg" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          <h2 className="projects_title">Proyectos</h2>
        </div>
      </section>

      <section id="contact">
        <div className="contact_container" onClick={moveWindowToBottom}>
          <div className="contact_box" style={stylesState.contact.contact_box} href="#contact">
            <h2 className="contact_title">Contacto</h2>
            <ContactForm />
          </div>
          <div className="contact_social_box" style={stylesState.contact.social_box}>
            <h2 className="contact_title">Redes</h2>
            <div className="contact_box_social_icon">
              <a
                className="contact_social_icon"
                aria-label="Linkedin"
                href="https://www.linkedin.com/in/giulianoconti/"
              >
                <svg className="contact_social_icon_svg" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a className="contact_social_icon" aria-label="Github" href="https://github.com/GiuliannT">
                <svg className="contact_social_icon_svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                className="contact_social_icon"
                aria-label="Instagram"
                href="https://www.instagram.com/giulianocontii/"
              >
                <svg className="contact_social_icon_svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
