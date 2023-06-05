/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './HowlingMoon.scss';
import Arrow from '../../Arrow.png';
import HowlingMoonImg from './Images.png';
import { FaGithub } from "react-icons/fa";

import FadeInSection from '../../visual-effects/FadeInSection';


function HowlingMoon() {
  const scrollTo = (target) => {
    const targetElement = document.querySelector(target);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
      <section className='howlingMoonSection' id='howlingMoon'>
        <FadeInSection>
          <div className='howlingMoonContainer'>

            <div class='howlingMoonHeader'>
              <div className='howlingMoonHeaderTextBox'>
                <h1 class={'howlingMoonHeaderText'}>HOWLING <br></br>MOON</h1>

                <p class={'howlingMoonHeaderParagraph'}>
                    BOOTCAMP FINAL<br></br>PROJECT
                </p>
              </div>

                      {/* GITHUB LINK */}
              <div className='howlingMoonLinkContainer'>
                <div className={'howlingMoonGithub'}>
                  <a href='https://github.com/LucasNseyep/howling-moon' target='_blank' rel="noreferrer">
                    <FaGithub size={40} className='howlingMoonLinkLogo'/>
                  </a>
                </div>
              </div>
            </div>


            <a href='http://www.howlingmoon.xyz/' target={'_blank'} rel='noreferrer'>
              <img src={HowlingMoonImg} className='howlingMoonImage'></img>
            </a>

            <div className='howlingMoonPageBottom'>

              <div
                className={'arrow'}
                onClick={() => scrollTo('#UIExperiment')}
              >
                <img src={Arrow} />
              </div>

              <div className='bottomRightContainer'>

              <p className={'howlingMoonBottomSentence'}>
                SAY GOODBYE TO
                <br></br>
                SCATTERED NOTES AND
                <br></br>
                FRAGMENTED IDEAS.
              </p>


              </div>
            </div>
          </div>
        </FadeInSection>

      </section>
  );
};

export default HowlingMoon;
