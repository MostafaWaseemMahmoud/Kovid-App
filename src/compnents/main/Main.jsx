import React from 'react';
import './main.css'
import { TbPlayerPlay } from "react-icons/tb";

const Main = () => {
  return(
    <main>
        <p className='h-t'>stay home</p>
        <div className="line"></div>
        <div className="main-content">
            <div className="main-txt">
                <div className="main-heading">
                    <h1>
                    stay safe
                    from covid-19
                    </h1>
                </div>
                <div className="main-description">
                    <p>
                    Coronavirus disease (COVID-19) was discovered in 2019. It is caused by the a virus named SARS-CoV2 which is a family of viruses that include the common cold, and viruses such as SARS and MERS. It is highly contagious and common signs of infection are majorly respiratory symptoms.
                    </p>
                </div>
                <div className="main-links">
                    <a href="https://emedicine.medscape.com/article/2500114-overview" target='_blank'>
                    Learn more
                    <img src="https://kovid-app.netlify.app/static/media/arrow.04df63ab.svg" width="36" height="36" alt="arrow-right"></img>
                    </a>

                    <a className='w-vid' href="https://covid19.ncdc.gov.ng/media/nitp.mp4" target='_blank'>
                    <TbPlayerPlay className='player-ico'/>
                    Play video now
                    </a>
                </div>
            </div>

            <div className="main-image">
                <img src="https://kovid-app.netlify.app/static/media/placeholder1.9dc540b2.svg" alt="" />
            </div>
        </div>
    </main>
  )
};

export default Main;