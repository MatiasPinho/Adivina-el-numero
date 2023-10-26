import "./Projects.css";
import { useState } from "react";
import ProjectOne from "../header/projects-carrousel/ProjectOne";
import ProjectTwo from "../header/projects-carrousel/ProjectTwo";
import ProjectThree from "../header/projects-carrousel/ProjectThree";

const Projects = () => {
  const previous = () => {
    const condition = index > 0;
    const nextIndex = condition ? index - 1 : arrayProjects.length - 1;
    setProject(arrayProjects[nextIndex]);
    setIndex(nextIndex);
  };

  const next = () => {
    const nextIndex = (index + 1) % arrayProjects.length;
    setProject(arrayProjects[nextIndex]);
    setIndex(nextIndex);
  };

  const arrayProjects = [
    <ProjectOne previous={previous} next={next} />,
    <ProjectTwo previous={previous} next={next} />,
    <ProjectThree previous={previous} next={next} />,
  ];

  const [project, setProject] = useState(arrayProjects[0]);
  const [index, setIndex] = useState(0);
  return (
    <>
      <section id="project-section" className="project-section-container">
        <h2 className="h2-hero-tecnology-skills">
          Projectos {""}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <g clipPath="url(#clip0_6_152)">
              <path
                d="M26.25 18.75H22.5C21.5054 18.75 20.5516 19.1451 19.8483 19.8483C19.1451 20.5516 18.75 21.5054 18.75 22.5V26.25H5.625C5.12772 26.25 4.65081 26.0525 4.29917 25.7008C3.94754 25.3492 3.75 24.8723 3.75 24.375V5.625C3.75 5.12772 3.94754 4.65081 4.29917 4.29917C4.65081 3.94754 5.12772 3.75 5.625 3.75H18.125C18.6223 3.75 19.0992 3.55246 19.4508 3.20083C19.8025 2.84919 20 2.37228 20 1.875C20 1.37772 19.8025 0.900805 19.4508 0.549175C19.0992 0.197544 18.6223 0 18.125 0L5.625 0C4.13316 0 2.70242 0.592632 1.64752 1.64752C0.592632 2.70242 0 4.13316 0 5.625L0 24.375C0 25.8668 0.592632 27.2976 1.64752 28.3525C2.70242 29.4074 4.13316 30 5.625 30H20.6063C22.0977 29.9997 23.5279 29.4071 24.5825 28.3525L28.3525 24.5825C29.4071 23.5279 29.9997 22.0977 30 20.6063V14.3825C30 13.8852 29.8025 13.4083 29.4508 13.0567C29.0992 12.705 28.6223 12.5075 28.125 12.5075C27.6277 12.5075 27.1508 12.705 26.7992 13.0567C26.4475 13.4083 26.25 13.8852 26.25 14.3825V18.75Z"
                fill="#38CFA4"
              />
              <path
                d="M26.2038 1.25005C25.7035 1.26472 25.2114 1.38086 24.7574 1.59144C24.3034 1.80201 23.8969 2.10263 23.5625 2.47505L13.3925 13.8413C14.5342 14.0078 15.6073 14.4882 16.4919 15.2289C17.3766 15.9696 18.038 16.9416 18.4025 18.0363L28.9025 7.5363C29.5916 6.8457 29.9785 5.90998 29.9785 4.93442C29.9785 3.95887 29.5916 3.02315 28.9025 2.33255C28.548 1.98067 28.1265 1.70354 27.6629 1.51759C27.1994 1.33164 26.7032 1.24067 26.2038 1.25005Z"
                fill="#38CFA4"
              />
              <path
                d="M11.61 16.3337C8.71374 16.8912 7.27874 20.1162 6.65624 22.1262C6.59754 22.3136 6.58379 22.5121 6.61612 22.7058C6.64845 22.8994 6.72594 23.0828 6.84231 23.2409C6.95869 23.399 7.11068 23.5275 7.28596 23.616C7.46125 23.7044 7.65491 23.7503 7.85125 23.75H12.5C13.0214 23.7501 13.5371 23.6414 14.0141 23.431C14.4911 23.2206 14.9191 22.913 15.2705 22.5279C15.622 22.1428 15.8893 21.6886 16.0554 21.1944C16.2214 20.7001 16.2826 20.1767 16.235 19.6575C16.1686 19.127 15.9933 18.6159 15.7202 18.1562C15.4471 17.6966 15.082 17.2983 14.6478 16.9863C14.2137 16.6743 13.7197 16.4553 13.197 16.343C12.6743 16.2307 12.134 16.2275 11.61 16.3337Z"
                fill="#38CFA4"
              />
            </g>
            <defs>
              <clipPath id="clip0_6_152">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </h2>

        <div className="projects-border-container">
          <p className="button-previous-project" onClick={previous}>
            {"<"}
          </p>
          {project}
          <p className="button-next-project" onClick={next}>
            {">"}
          </p>
        </div>
      </section>
    </>
  );
};

export default Projects;
