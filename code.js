const aboutAge=document.querySelector(".about_age"),aboutCity=document.querySelector(".about_city"),aboutLink=document.querySelector("#about_link"),aboutNacionality=document.querySelector(".about_nacionality"),aboutName=document.querySelector(".about_name"),aboutSection=document.querySelector("#about"),aboutText=document.querySelector(".about_text"),aboutExperienceTitle=document.querySelector(".about_experience_title"),aboutExperienceTextBold=document.querySelector(".about_experience_text_bold"),aboutExperienceText=document.querySelector(".about_experience_text"),aboutTitle=document.querySelector(".about_title"),contactBtn=document.querySelector(".contact_btn"),contactForm=document.querySelector(".contact_form"),contactInput=document.querySelector(".contact_input"),contactLink=document.querySelector("#contact_link"),contactMessage=document.querySelector(".contact_message"),contactStatus=document.querySelector(".contact_status"),contactTextarea=document.querySelector(".contact_textarea"),homeBtn=document.querySelector(".home_btn"),homeBtnText=document.querySelector(".home_btn_text"),homeLink=document.querySelector("#home_link"),homeSubtitle=document.querySelector(".home_subtitle"),html=document.querySelector("html"),menu=document.querySelector(".nav_list"),menuBtn=document.querySelector(".menu_btn"),metaThemeColor=document.querySelector('meta[name="theme-color"]'),myAge=document.getElementById("myAge"),navbarAbout=document.querySelector(".navbar_about"),navbarContact=document.querySelector(".navbar_contact"),navbarHome=document.querySelector(".navbar_home"),navbarLogo=document.querySelectorAll(".nav_logo_img"),navbarProjects=document.querySelector(".navbar_projects"),navBtnDarkmode=document.querySelector(".nav_btn_darkmode"),navMobileMask=document.querySelector(".nav_mobile_mask"),navOptions=document.querySelectorAll(".nav_option"),navRightContainer=document.querySelector(".nav_right_container"),navOptions_list=document.querySelector(".nav_options_list"),navSelectImg=document.querySelector(".nav_select_img"),navSelectSpan=document.querySelector(".nav_select_span"),projectsButton=document.getElementsByClassName("projects_button"),projectsButtonNext=projectsButton[1],projectsButtonPrevious=projectsButton[0],projectsLink=document.querySelector("#projects_link"),projectsList=document.querySelector(".projects_list"),projectsSection=document.querySelector("#projects"),projectsTitle=document.querySelector(".projects_title"),projectsTouchScrollAnimation=document.querySelector(".projects_touch_scroll_animation");let currentX,scrollLeft,startX,isDown=!1,showMenu=!1;const languages={en:{navbar:{home:"Home",about:"About",projects:"Projects",contact:"Contact",languages:"Languages",language:"English",darkMode:"Dark Mode"},home:{subtitle:"Frontend Engineer",resumeBtn:"Resume"},about:{title:"About Me",name:"Name:",age:"Age:",nationality:"Nationality:",city:"City:",description:"I started studying programming in 2021, starting with HTML, CSS, and JavaScript.<br /> I created small projects with arduino using C++.<br /> In the year 2022 I mainly focused on Front-End development using React.<br /> I like programming, designing in Blender, creating 3D plans in SketchUp, going out with friends, playing paddle tennis, video games and riding my bike.",experienceTitle:"Experience",experienceTextBold:'<span class="about_experience_text_bold_span">FRONTEND ENGINEER</span><span class="about_experience_text_bold_span"><span class="about_experience_container_span_compa">XLABS<a class="about_experience_container_link" href="https://www.linkedin.com/company/xlabsxyz/"><img alt="xLabs" class="about_experience_container_icon" src="assets/xLabs.webp" title="xLabs"/></a></span>2023 - CURRENT</span>',experienceText:"I developed reusable components. I designed and updated designs. I solved technical problems. I Produced cross-browser compatible websites."},projects:{title:"My projects",github:"Project github",web:"Project website",previous:"Previous",next:"Next"},contact:{emailInput:"example@gmail.com",message:"Message",messageInput:"Hello, I would like to contact you for...",statusTextOk:"Thanks for your submission!",statusTextError:"Oops! There was a problem submitting your form.",send:"Send"}},es:{navbar:{home:"Inicio",about:"Sobre mí",projects:"Proyectos",contact:"Contacto",languages:"Idiomas",language:"Español",darkMode:"Modo Oscuro"},home:{subtitle:"Desarrollador Frontend",resumeBtn:"Currículum"},about:{title:"Sobre Mí",name:"Nombre:",age:"Edad:",nationality:"Nacionalidad:",city:"Ciudad:",description:"Empecé a estudiar programación en 2021, iniciando por HTML, CSS y JavaScript.<br /> Creé proyectos pequeños con arduino utilizando C++.<br /> En el año 2022 me enfoqué principalmente en el desarrollo Front-End usando React.<br /> Me gusta programar, diseñar en Blender, crear planos 3D en SketchUp, juntarme con amigos, jugar padel, los videojuegos y andar en bici.",experienceTitle:"Experiencia",experienceTextBold:'<span class="about_experience_text_bold_span">DESARROLLADOR FRONTEND</span><span class="about_experience_text_bold_span"><span class="about_experience_container_span_compa">XLABS<a class="about_experience_container_link" href="https://www.linkedin.com/company/xlabsxyz/"><img alt="xLabs" class="about_experience_container_icon" src="assets/xLabs.webp" title="xLabs"/></a></span>2023 - ACTUAL</span>',experienceText:"Desarrollé componentes reutilizables. Diseñé y actualicé diseños. Resolví problemas técnicos. Produje sitios web compatibles con múltiples navegadores."},projects:{title:"Mis Proyectos",github:"Github del proyecto",web:"Web del proyecto",previous:"Anterior",next:"Siguiente"},contact:{emailInput:"ejemplo@gmail.com",message:"Mensaje:",messageInput:"Buenas, me gustaría contactar contigo para...",statusTextOk:"¡Gracias por tu envío!",statusTextError:"¡Ups! Hubo un problema al enviar tu formulario.",send:"Enviar"}},pt:{navbar:{home:"Início",about:"Sobre mim",projects:"Projetos",contact:"Contato",languages:"Idiomas",language:"Português",darkMode:"Modo Escuro"},home:{subtitle:"Desenvolvedor Frontend",resumeBtn:"Currículo"},about:{title:"Sobre Mim",name:"Nome:",age:"Idade:",nationality:"Nacionalidade:",city:"Cidade:",description:"Comecei a estudar programação em 2021, iniciando por HTML, CSS e JavaScript.<br /> Criei projetos pequenos com arduino utilizando C++.<br /> No ano de 2022 me concentrei principalmente no desenvolvimento Front-End usando React.<br /> Gosto de programar, desenhar no Blender, criar planos 3D no SketchUp, sair com amigos, jogar padel, jogos de vídeo e andar de bicicleta.",experienceTitle:"Experiência",experienceTextBold:'<span class="about_experience_text_bold_span">DESENVOLVEDOR FRONTEND</span><span class="about_experience_text_bold_span"><span class="about_experience_container_span_compa">XLABS<a class="about_experience_container_link" href="https://www.linkedin.com/company/xlabsxyz/"><img alt="xLabs" class="about_experience_container_icon" src="assets/xLabs.webp" title="xLabs"/></a></span>2023 - ATUAL</span>',experienceText:"Desenvolvi componentes reutilizáveis. Desenhei e atualizei projetos. Resolvi problemas técnicos. Produzi sites compatíveis com vários navegadores."},projects:{title:"Meus Projetos",github:"Github do projeto",web:"Web do projeto",previous:"Anterior",next:"Próximo"},contact:{emailInput:"exemplo@gmail.com",message:"Mensagem:",messageInput:"Olá, gostaria de entrar em contato com você para...",statusTextOk:"Obrigado pelo seu envio!",statusTextError:"Ops! Houve um problema ao enviar seu formulário.",send:"Enviar"}}},activeMenu=()=>{window.scrollY+window.innerHeight>document.documentElement.scrollHeight-100?(removeAllActive(),contactLink.classList.add("active")):window.scrollY<aboutSection.offsetTop-aboutSection.offsetTop/3?(removeAllActive(),homeLink.classList.add("active")):window.scrollY<projectsSection.offsetTop-projectsSection.offsetTop/3?(removeAllActive(),aboutLink.classList.add("active")):(removeAllActive(),projectsLink.classList.add("active"))},removeAllActive=()=>{document.querySelectorAll(".nav_link").forEach((e=>e.classList.remove("active")))},toggleMenu=()=>{window.innerWidth<=790&&!showMenu?(menu.classList.add("nav_list_active"),menuBtn.classList.add("d_none"),navBtnDarkmode.classList.add("d_none"),navRightContainer.classList.add("d_none"),navMobileMask.classList.add("nav_mobile_mask_active"),document.body.style.overflow="hidden",showMenu=!0):(menu.classList.remove("nav_list_active"),menuBtn.classList.remove("d_none"),navBtnDarkmode.classList.remove("d_none"),navRightContainer.classList.remove("d_none"),navMobileMask.classList.remove("nav_mobile_mask_active"),document.body.style.overflow="auto",showMenu=!1),navOptions_list.classList.contains("activeLanguage")&&showOrHideOptions()},showOrHideOptions=()=>{const e=navOptions_list.classList.contains("activeLanguage");navOptions_list.classList.toggle("activeLanguage",!e),navSelectImg.src=e?"/assets/arrow_down.svg":"/assets/arrow_up.svg"},initializeTheme=()=>{let e=localStorage.getItem("theme");e||(e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",localStorage.setItem("theme",e)),setTheme(e)},setTheme=e=>{const t="dark"===e;html.classList.replace(t?"light":"dark",e),navbarLogo.forEach((e=>{e.src=t?"/assets/favicon_light.png":"/assets/favicon_dark.png"})),metaThemeColor.setAttribute("content",t?"#000000":"#ffffff")},handleDarkModeBtn=()=>{"dark"===localStorage.getItem("theme")?(setTheme("light"),localStorage.setItem("theme","light")):(setTheme("dark"),localStorage.setItem("theme","dark"))},handleLang=(e="en")=>{"en"!==e?history.pushState(null,null,`?lang=${e}`):history.pushState(null,null,"/"),localStorage.setItem("language",e),aboutAge.textContent=languages[e].about.age,aboutCity.textContent=languages[e].about.city,aboutExperienceText.innerHTML=languages[e].about.experienceText,aboutExperienceTextBold.innerHTML=languages[e].about.experienceTextBold,aboutExperienceTitle.textContent=languages[e].about.experienceTitle,aboutNacionality.textContent=languages[e].about.nationality,aboutName.textContent=languages[e].about.name,aboutText.innerHTML=languages[e].about.description,aboutTitle.textContent=languages[e].about.title,contactBtn.textContent=languages[e].contact.send,contactBtn.title=languages[e].contact.send,contactInput.placeholder=languages[e].contact.emailInput,contactMessage.textContent=languages[e].contact.message,contactTextarea.placeholder=languages[e].contact.messageInput,homeBtn.title=languages[e].home.resumeBtn,homeBtn.href=`https://giulianoconti.com/assets/Giuliano_Conti_CV-${e}.pdf`,homeBtnText.textContent=languages[e].home.resumeBtn,homeSubtitle.textContent=languages[e].home.subtitle,navbarAbout.textContent=languages[e].navbar.about,navbarAbout.title=languages[e].navbar.about,navbarContact.textContent=languages[e].navbar.contact,navbarContact.title=languages[e].navbar.contact,navbarHome.textContent=languages[e].navbar.home,navbarHome.title=languages[e].navbar.home,navbarProjects.textContent=languages[e].navbar.projects,navbarProjects.title=languages[e].navbar.projects,navBtnDarkmode.title=languages[e].navbar.darkMode,navSelectSpan.textContent=languages[e].navbar.language,navSelectSpan.title=languages[e].navbar.languages,projectsButtonNext.title=languages[e].projects.next,projectsButtonPrevious.title=languages[e].projects.previous,projectsTitle.textContent=languages[e].projects.title,html.lang=e,navOptions_list.classList.contains("activeLanguage")&&showOrHideOptions(),fetchProjects(e)},detectLanguage=()=>{const e=(navigator.language||navigator.userLanguage).substr(0,2);return["es","en","pt"].includes(e)?e:"en"},handleLangSaved=()=>{const e=new URLSearchParams(window.location.search).get("lang");handleLang(e||localStorage.getItem("language")||detectLanguage())},handleMyAge=()=>{const e=new Date,t=new Date("2001-03-07");let o=e.getFullYear()-t.getFullYear();const a=e.getMonth()-t.getMonth();(a<0||0===a&&e.getDate()<t.getDate())&&o--,myAge.innerHTML=o},fetchProjects=async(e="en")=>{try{const t=await fetch(`https://giulianoconti.github.io/api/myProjects-${e}.json`);if(!t.ok)throw new Error("Network response was not ok");const o=await t.json();projectsList.innerHTML="";const a=document.createDocumentFragment();o.forEach((t=>{const n=document.createElement("div");n.className="project",n.innerHTML=`\n <img class="project_img" src="${t.img}" alt="${t.title}"></img>\n <div class="project_info">\n <p class="project_number">${t.id} / ${o.length}</p>\n ${t.technologies?`\n <div class="project_technologies">\n ${t.technologies.map((e=>`<img class="project_technology_img" src="${e.img}" title="${e.title}" alt="${e.title}"></img>`)).join("")}\n </div>\n `:""}\n <h3 class="project_title">${t.title}</h3>\n <p class="project_description">${t.description}</p>\n <div class="project_links">\n <a class="project_link" href="${t.hrefGithub}" title="Github" target="_blank" rel="noreferrer" aria-label="link to ${t.title} github repository">\n <svg class="project_link_svg" fill="currentColor" viewBox="0 0 24 24">\n <path\n fillRule="evenodd"\n d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"\n clipRule="evenodd"\n ></path>\n </svg>\n ${languages[e].projects.github}\n </a>\n ${t.hrefWeb?`\n <a class="project_link" href="${t.hrefWeb}" title="Web" target="_blank" rel="noreferrer" aria-label="link to ${t.title} website">\n <svg class="project_link_svg" fill="currentColor" viewBox="0 0 24 24">\n <path\n d="M3.51211712,15 L8.17190229,15 C8.05949197,14.0523506 8,13.0444554 8,12 C8,10.9555446 8.05949197,9.94764942 8.17190229,9 L3.51211712,9 C3.18046266,9.93833678 3,10.9480937 3,12 C3,13.0519063 3.18046266,14.0616632 3.51211712,15 L3.51211712,15 Z M3.93551965,16 C5.12590433,18.3953444 7.35207678,20.1851177 10.0280093,20.783292 C9.24889451,19.7227751 8.65216136,18.0371362 8.31375067,16 L3.93551965,16 L3.93551965,16 Z M20.4878829,15 C20.8195373,14.0616632 21,13.0519063 21,12 C21,10.9480937 20.8195373,9.93833678 20.4878829,9 L15.8280977,9 C15.940508,9.94764942 16,10.9555446 16,12 C16,13.0444554 15.940508,14.0523506 15.8280977,15 L20.4878829,15 L20.4878829,15 Z M20.0644804,16 L15.6862493,16 C15.3478386,18.0371362 14.7511055,19.7227751 13.9719907,20.783292 C16.6479232,20.1851177 18.8740957,18.3953444 20.0644804,16 L20.0644804,16 Z M9.18440269,15 L14.8155973,15 C14.9340177,14.0623882 15,13.0528256 15,12 C15,10.9471744 14.9340177,9.93761183 14.8155973,9 L9.18440269,9 C9.06598229,9.93761183 9,10.9471744 9,12 C9,13.0528256 9.06598229,14.0623882 9.18440269,15 L9.18440269,15 Z M9.3349823,16 C9.85717082,18.9678295 10.9180729,21 12,21 C13.0819271,21 14.1428292,18.9678295 14.6650177,16 L9.3349823,16 L9.3349823,16 Z M3.93551965,8 L8.31375067,8 C8.65216136,5.96286383 9.24889451,4.27722486 10.0280093,3.21670804 C7.35207678,3.81488234 5.12590433,5.60465556 3.93551965,8 L3.93551965,8 Z M20.0644804,8 C18.8740957,5.60465556 16.6479232,3.81488234 13.9719907,3.21670804 C14.7511055,4.27722486 15.3478386,5.96286383 15.6862493,8 L20.0644804,8 L20.0644804,8 Z M9.3349823,8 L14.6650177,8 C14.1428292,5.03217048 13.0819271,3 12,3 C10.9180729,3 9.85717082,5.03217048 9.3349823,8 L9.3349823,8 Z M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z"\n ></path>\n </svg>\n ${languages[e].projects.web}\n </a>\n `:""}\n </div>\n </div>\n `,a.appendChild(n)})),projectsList.appendChild(a)}catch(e){console.error("There was a problem with the fetch operation:",e.message)}},handleSubmit=async e=>{e.preventDefault();const t=localStorage.getItem("language")||"en",o=new FormData(e.target);try{(await fetch(e.target.action,{method:contactForm.method,body:o,headers:{Accept:"application/json"}})).ok?(contactStatus.innerHTML=languages[t].contact.statusTextOk,contactForm.reset()):contactStatus.innerHTML=languages[t].contact.statusTextError}catch(e){contactStatus.innerHTML=languages[t].contact.statusTextError}},removeScrollAnimationAndEventListener=()=>{projectsTouchScrollAnimation.classList.add("d_none"),projectsList.removeEventListener("scroll",(()=>{}))},previousProject=()=>{0===projectsList.scrollLeft?projectsList.scrollLeft=projectsList.scrollWidth-projectsList.offsetWidth:projectsList.scrollLeft-=projectsList.offsetWidth},nextProject=()=>{projectsList.scrollLeft>projectsList.scrollWidth-projectsList.offsetWidth-100?projectsList.scrollLeft=1:projectsList.scrollLeft+=projectsList.offsetWidth},handleMouseDown=e=>{isDown=!0,startX=e.touches?.[0]?.pageX||e.pageX,scrollLeft=projectsList.scrollLeft},handleMouseMove=e=>{if(e.preventDefault(),!isDown)return;currentX=e.touches?.[0]?.pageX||e.pageX;const t=currentX-startX;projectsList.scrollLeft=scrollLeft-t},handleMouseEnd=()=>{isDown=!1,Math.abs(currentX-startX)>50&&(currentX>startX?0===projectsList.scrollLeft?projectsList.scrollLeft=projectsList.scrollWidth-projectsList.offsetWidth:projectsList.scrollLeft-=projectsList.offsetWidth:projectsList.scrollLeft>projectsList.scrollWidth-projectsList.offsetWidth-100?projectsList.scrollLeft=1:projectsList.scrollLeft+=projectsList.offsetWidth)};projectsList.addEventListener("mousedown",handleMouseDown),projectsList.addEventListener("mousemove",handleMouseMove),projectsList.addEventListener("mouseup",handleMouseEnd),projectsList.addEventListener("mouseleave",(()=>isDown=!1)),projectsList.addEventListener("scroll",removeScrollAnimationAndEventListener),window.addEventListener("scroll",activeMenu),initializeTheme(),handleLangSaved(),handleMyAge(),navigator.serviceWorker&&navigator.serviceWorker.register("/sw.js");