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
          <p className="card-intro-subtitle">Mi nombre es Giuliano Conti. Empecé a estudiar programación en 2021.</p>
          <p className="card-intro-subtitle">En el año 2022 me enfoqué principalmente en el desarrollo Front-end utilizando React.</p>
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
