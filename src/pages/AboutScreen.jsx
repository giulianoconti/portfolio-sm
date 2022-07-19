export const AboutScreen = ({ setPage }) => {
  const getAge = (birthday) => {
    const today = new Date();
    const birthDate = new Date(birthday);
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  };

  const goToProjects = () => {
    setPage(2);
  };

  return (
    <>
      <div className="height-for-absolutes" />
      <div className="card-about-container">
        <h1 className="card-about-title">Sobre Mí</h1>
        <p className="card-about-subtitle">Soy de Resistencia, Argentina. Tengo {getAge("2001-03-07")} años.</p>
        <p className="card-about-subtitle">
          Mis pasatiempos son programar, diseñar planos 3D en SketchUp, juntarme con amigos, jugar videojuegos y andar en bici.
        </p>
        <button className="card-about-btn" onClick={goToProjects}>
          Siguiente
        </button>
      </div>
    </>
  );
};
