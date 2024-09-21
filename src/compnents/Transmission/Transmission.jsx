import React from 'react';
import './transmission.css'
const Transmission = () => {
  return (
    <div className='transmission'>
        <div className="container-heading">
            <div className="content">
                <h1>How contagious is it?</h1>
                <div className='c-line'></div>
            </div>
        </div>

        <div className="container-desc-txt">
            <p>COVID-19 is thought to spread mainly through close contact from person to person, including between people who are physically near each other (within about 6 feet). People who are infected but do not show symptoms can also spread the virus to others. Cases of reinfection with COVID-19 have been reported but are rare. We are still learning about how the virus spreads and the severity of illness it causes.</p>
        </div>

        <div className="container-cards">
            <div className="card">
                <div className="card-image">
                    <img src="https://kovid-app.netlify.app/static/media/cough.4bf771f0.svg"/>
                </div>
                <div className="card-title">
                    <h3>Cough/sneeze from an infected person</h3>
                </div>
                <div className="card-dec">
                When people with COVID-19 cough, sneeze, sing, talk, or breathe they produce respiratory droplets. Infections occur mainly through exposure to respiratory droplets when a person is in close contact with someone who has COVID-19.
                </div>
            </div>
            {/* ---------------- Second Card ---------------- */}
            <div className="card">
                <div className="card-image">
                    <img src="https://kovid-app.netlify.app/static/media/handshake.55fa9460.svg"/>
                </div>
                <div className="card-title">
                    <h3>Human Contacts with infected person</h3>
                </div>
                <div className="card-dec">
                People who are physically near (within 6 feet) a person with COVID-19 or have direct contact with that person are at greatest risk of infection. Droplets from infected person(s) are more likely to settle on the mucous membrane of others with close contact.
                </div>
            </div>
            {/* ---------------- Third Card ---------------- */}
            <div className="card">
                <div className="card-image">
                    <img src="https://kovid-app.netlify.app/static/media/surface.926777a7.svg"/>
                </div>
                <div className="card-title">
                    <h3>Contaminated Objects/Surface</h3>
                </div>
                <div className="card-dec">
                Respiratory droplets can also land on surfaces & objects. It's possible that a person could get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or eyes. Spread from touching surfaces is not common.
                </div>
            </div>
            {/* ---------------- Lasr Card ---------------- */}
            <div className="card">
                <div className="card-image">
                    <img src="https://kovid-app.netlify.app/static/media/travel.ef64b10e.svg"/>
                </div>
                <div className="card-title">
                    <h3>Travel to endemic region</h3>
                </div>
                <div className="card-dec">
                Travelling to destinations with large cases of Covid-19 also poses significant risk as the chances of coming in close contact with infected people increases with community transmission. You may need to assess your risk when making travel plans.
                </div>
            </div>
        </div>
    </div>
  );
};

export default Transmission;