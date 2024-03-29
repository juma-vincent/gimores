import React from "react";
import { ReactComponent as HealthIcon } from "../../assets/icons/health.svg";
import { ReactComponent as EducationIcon } from "../../assets/icons/education.svg";
import { ReactComponent as HouseIcon } from "../../assets/icons/house.svg";
import { ReactComponent as HumanRightsIcon } from "../../assets/icons/human-rights.svg";

import "./features.scss";

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature">
        <HumanRightsIcon className="icon" />

        <div className="content">
          <h3>Promoting Human Rights</h3>
          <p>
          We seek to promote human rights in Afrika.
          </p>
        </div>
      </div>
      <div className="feature">
        <HouseIcon className="icon" />
        <div className="content">
          <h3>Housing</h3>
          <p>
          We seek to reach a solution to housing problems faced in Afrika.
          </p>
        </div>
      </div>
      
      
      <div className="feature">
        <EducationIcon className="icon"/>
        <div className="content">
          <h3>Education</h3>
          <p>
          We seek to promote education in Afrika.

          </p>
        </div>
      </div>

      <div className="feature">
        <HealthIcon className="icon" />

        <div className="content">
          <h3>Health and Welfare</h3>
          <p>
          We seek to facilitate good health and welfare for Afrikans.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Features;