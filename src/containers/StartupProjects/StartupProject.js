import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
// import StyleContext from "../../contexts/StyleContext";
// import {workExperiences} from "../../portfolio";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import "../workExperience/WorkExperience.scss";


export default function StartupProject() {
  const isDark = true;
  if (bigProjects.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Hands-on Projects & Experience</h1>
              <div className="experience-cards-div">
                {bigProjects.projects.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.projectName,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.image,
                        // role: card.role,
                        descBullets: card.projectDesc
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
