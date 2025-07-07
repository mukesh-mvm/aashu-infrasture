import React from 'react';

const Services = () => {
  return (
    <div>
      <section className="backgounsection1">
        <h2 className="subheading">
          <span className="highlight-our">Why</span> Industry Leaders Trust Us
        </h2>
        <div className="gettouch-service-grid1 container">
          {/* Card 1 */}
          <div className="gettouch-service-card1 bachimg">
            <div className="gettouch-service-content1">
              <h3 className="gettouch-service-title1">Background Verified Engineers & Technicians</h3>
              <p className="gettouch-service-description1">
                All personnel undergo thorough verification to ensure safety, trust, and professionalism at work sites.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="gettouch-service-card1 bachimg1">
            <div className="gettouch-service-content1">
              <h3 className="gettouch-service-title1">Specialists in MS & Structural Fabrication</h3>
              <p className="gettouch-service-description1">
                We deliver precise metal fabrication for industrial cement plants, power plants, and heavy-duty structures.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="gettouch-service-card1 bachimg2">
            <div className="gettouch-service-content1">
              <h3 className="gettouch-service-title1">Project Delivery Across India</h3>
              <p className="gettouch-service-description1">
                From bridges to boilers, we serve industries nationwide with dependable infrastructure solutions.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="gettouch-service-card1 bachimg3">
            <div className="gettouch-service-content1">
              <h3 className="gettouch-service-title1">On-Time Execution & Fast Turnaround</h3>
              <p className="gettouch-service-description1">
                Timely completion with rapid deployment of skilled teams and machinery for large-scale projects.
              </p>
            </div>
          </div>
        </div>

        <div className="btn-container">
          <button className="button" onClick={() => openModal()}>
            Request a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
