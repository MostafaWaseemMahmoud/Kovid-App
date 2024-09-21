import React from 'react';
import "./prevention.css"
const Prevention = () => {
  return (
    <div className='prevention'>
      <div className="prevention-container">
      <div className="container-heading">
            <div className="content">
                <h1>How can it be prevented?</h1>
                <div className='c-line'></div>
            </div>
        </div>

        <div className="container-desc-txt">
            <p>Coronaviruses are zoonotic, meaning they are transmitted between animals and people. Detailed investigations found that SARS-COV2...</p></div>

        <div className="container-cards">
            <div className="card">
                <div className="card-image">
                    <img src="https://kovid-app.netlify.app/static/media/mask.be2f7692.svg"/>
                </div>
                <div className="card-title">
                    <h3>wear face mask</h3>
                </div>
            </div>
            {/* ---------------- Second Card ---------------- */}
            <div className="card">
                <div className="card-image">
                    <img src="https://kovid-app.netlify.app/static/media/wash.1199372a.svg"/>
                </div>
                <div className="card-title">
                    <h3>Human Contacts with infected person</h3>
                </div>
            </div>
            {/* ---------------- Third Card ---------------- */}
            <div className="card">
                <div className="card-image">
                    <img src="https://kovid-app.netlify.app/static/media/kerchief.b4376301.svg"/>
                </div>
                <div className="card-title">
                    <h3>use tissue</h3>
                </div>
            </div>
            {/* ---------------- Lasr Card ---------------- */}
            <div className="card">
                <div className="card-image">
                    <img src="https://kovid-app.netlify.app/static/media/distance.6305ce7d.svg"/>
                </div>
                <div className="card-title">
                    <h3>social distance</h3>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Prevention;