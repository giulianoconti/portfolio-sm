import React from "react";
import PropTypes from 'prop-types';

export const IntroScreen = ({ setPage }) => {
  const goToAbout = () => {
    setPage(1);
  };

  return (
    <>
      <div className="height-for-absolutes" />
      <div className="card-intro-container">
        <h1 className="card-intro-title">INTRODUCCIÓN</h1>
        <div className="card-intro-subtitle-container">
          <p className="card-intro-subtitle">Soy una persona autodidacta. Me gustan los desafíos.</p>
          <p className="card-intro-subtitle">Tengo conocimiento en React, HTML5, CSS3, JavaScript y Git.</p>
        </div>
        <button className="card-intro-btn" onClick={goToAbout}>
          Ver Más
        </button>
      </div>
    </>
  );
};

IntroScreen.propTypes = {
  setPage: PropTypes.func.isRequired,
}
