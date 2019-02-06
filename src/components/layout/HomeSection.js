import React from 'react';
import '../style/HomeSection.css';

const HomeSection = props => {
  return (
    <header id="home-section">
      <div className="dark-overlay">
        <div className="home-inner container">
          <div className="row">
            <div className="col-lg-8 d-none d-lg-block" />
            <div className="col-lg-4" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeSection;
