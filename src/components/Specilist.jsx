import React from 'react';

const Specilist = () => {
  return (
    <>
      <section className="our-specialist-container">
        <div className="our-container">
          <div className="our-content">
            <div className="our-content-top">
              <div className="top-left">
                <h2 className="our-specialist-heding">Our Specialized Infrastructure Solutions</h2>
                <p className="our-specialist-para">
                  From industrial fabrication to turnkey infrastructure projects, AASHU INFRASTRUCTURE delivers precision, durability, and reliability at every phase.
                </p>
              </div>

              <div className="top-right">
                <img src="/images/g2.png" alt="Cement Plant Fabrication" className="right-img" />
              </div>
            </div>

            <div className="our-content-bottom">
              <div className="top-right">
                <img src="/images/g6.png" alt="Bridge Construction" className="right-img" />
              </div>

              <div className="bottom-right1">
                <div className="ourspecialist-grid-container">
                  <div>
                    <h4 className="bottom-heading">MS & Heavy Steel Fabrication</h4>
                    <div className="hr-line"></div>
                    <p className="bottom-para">
                      High-quality fabrication for cement plants, power plants, and industrial structures — built to withstand the toughest conditions.
                    </p>
                  </div>
                  <div>
                    <h4 className="bottom-heading">Bridge & FOB Construction</h4>
                    <div className="hr-line"></div>
                    <p className="bottom-para">
                      We specialize in foot overbridge and railway bridge fabrication and erection using certified engineering practices.
                    </p>
                  </div>
                  <div>
                    <h4 className="bottom-heading">Turnkey Industrial Projects</h4>
                    <div className="hr-line"></div>
                    <p className="bottom-para">
                      From planning to completion, we manage complete infrastructure projects including design, fabrication, installation, and maintenance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specilist;
