import React from 'react';
import './symptoms.css'

const Symptoms = () => {
  return (
    <div className="symptoms">
        <div className="symptoms-container">
            <div className="txt">
                <div className="title">
                    <h1>Here are some of the symptoms of Covid-19</h1>
                </div>
                <div className="description">
                    <p>Coronavirus disease (COVID-19) is a new strain that was discovered in 2019 and has been previously identified in humans. People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms to severe illness. Symptoms may appear 2-14 days after exposure to the virus. Common signs of infection are majorly respiratory symptoms.</p>
                </div>

                <div className="links">
                <a href="https://www.webmd.com/lung/coronavirus" target='_blank'>
                    Learn more
                    <img src="https://kovid-app.netlify.app/static/media/arrow.04df63ab.svg" width="36" height="36" alt="arrow-right"></img>
                    </a>
                </div>
            </div>
            <div className="i-cards">
                <div className="i-card">
                <div className="card-img">
                    <img src="https://kovid-app.netlify.app/static/media/koff.ce86b8dc.svg" />
                </div>
                <div className="card-details">
                    <h6>
                    cough
                </h6>
                </div>
                </div>
                <div className="i-card">
                <div className="card-img">
                    <img src="https://kovid-app.netlify.app/static/media/headache.ffb4cbbd.svg" />
                </div>
                <div className="card-details">
                    <h6>
                    headache

                </h6>
                </div>
                </div>
                <div className="i-card">

                <div className="card-img">
                    <img src="https://kovid-app.netlify.app/static/media/fever.29bdca93.svg" />
                </div>
                <div className="card-details">
                    <h6>
                    fever
                </h6>
                </div>
                </div>
                <div className="i-card">

                <div className="card-img">
                    <img src="https://kovid-app.netlify.app/static/media/breathing%20diff.e47dc65e.svg" />
                </div>
                <div className="card-details">
                    <h6>
                    shortness of breath
                </h6>
                </div>
                </div>
                <div className="i-card">

                <div className="card-img">
                    <img src="https://kovid-app.netlify.app/static/media/sore_throat.f2e917e3.svg" />
                </div>
                <div className="card-details">
                    <h6>
                    sore throat
                </h6>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Symptoms;