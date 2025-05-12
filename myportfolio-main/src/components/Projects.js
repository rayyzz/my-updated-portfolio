import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";
import Carousel from "react-bootstrap/Carousel";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const projects = {
      "IoT Mobile App for Smart Work Environments": {
        desc:
          "A Mobile app designed to improve work space environments through mobile phone enhancing mobility with features such as Project Progress Tracker, Task Delegation system using AI, Meeting Room Booking, and temperature control system.",
        techStack: "React Native, Python, Javascript, HTML / CSS",
        link: "https://github.com/4bdulWadood/Capstone",
        open: "https://capstonev2-plum.vercel.app/",
        images: [
          "/assets/phone4.png",
          "/assets/phone.png",
          "/assets/phone3.png",
          "/assets/phone2.png",
        ]
      },
      "Distributed Air Traffic Control System": {
        desc:
          "The distributed Air Traffic Control system presented in this project mimics the control of aircraft both in the air and on the ground. The system, which offers a scalable, cloud-hosted solution, was created with FastAPI and deployed to Microsoft Azure as a Docker container. It illustrates several important ideas from cloud computing and distributed systems, such as resource coordination, concurrency, RESTful communication, and containerized deployment. ",
        techStack: "Python, HTML/CSS, JavaScript, Azure, Docker",
        link:
          "https://github.com/Tanim7/Air-Traffic-Control",
        images: [
          "/assets/airport3.png",
        ]
      },
      "IFitness": {
        desc:
          "iFitness is an application which allows users to track their progress and give them access to a variety of resources that are designed to help them stay motivated and fit. From a high-level perspective, the application enables users to track their fitness journey by giving them access to their gym goals, track their progress, and other vital resources (such as; motivational messages and daily reminders).",
        techStack: "PHP, JavaScript, MySQL, HTML/CSS",
        link:
          "https://github.com/afnanc/CPS714-Project",
        images: [
          "/assets/gymtest.png",
          "/assets/gymtest2.png",
          "/assets/gymtest3.png",
        ]
      },
      "Banking System with Secure Encryption": {
        desc:
          "Implemented AES encryption and MACs to secure 100+ ATM transactions via symmetric key protocols.",
        techStack: "Python, Flask, HTML/CSS, JavaScript",
        link: "https://github.com/Avinandan-Kundu/Secure-Banking-System_Network-Security",
        open: ""
      },
      "JSONs Serialization & Deserialization Testing": {
        desc:
          "Applied 50 boundary, mutation, logic, and formal tests to an established codebase, boosting test coverage and catching edge case failures in date, enum, and validation logic.",
        techStack: "Python, Pytest",
        link: "https://github.com/awaisirshad1/COE891-Project",
        open: ""
      },
      "Car Rental Database Management System": {
        desc:
          "Designed and implemented a relational database simulating a car rental system, utilizing core database concepts such as primary keys, foreign keys, normalization up to BCNF, and entity-relationship modeling to ensure data integrity and reduce redundancy.",
        techStack: "Oracle MySQL",
        link: "https://github.com/rayyzz/Car-Rental-DBMS",
        open: ""
      }

    };

    return (
      <div id="projects">
        <div className="section-header">
          <span className="section-title">/ Some projects I did</span>
        </div>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`} key={i}>
                <li className="projects-card">
                  {/* 📸 Carousel only for projects with images */}
                  {projects[key].images && (
                    <Carousel interval={null} className="project-carousel">
                      {projects[key].images.map((imgSrc, index) => (
                        <Carousel.Item key={index}>
                        <img
                          className={`d-block w-100 ${
                            key === "Distributed Logging and Monitoring System"
                              ? "distributed-carousel-image"
                              : key === "IFitness"
                              ? "ifitness-carousel-image"
                              : "project-carousel-image"
                          }`}
                          src={imgSrc}
                          alt={`${key} screenshot ${index + 1}`}
                        />


                        </Carousel.Item>
                      ))}
                    </Carousel>
                  )}
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon style={{ fontSize: 35 }} />
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    />
                  </div>
                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
