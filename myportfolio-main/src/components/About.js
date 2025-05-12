import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        I am a recent <a>Computer Engineering</a> graduate from 
        Toronto Metropolitan University (formerly Ryerson University) with a specialization in 
        Software Engineering. I am passionate in many areas of the tech world and am experienced in Software Development, Information Technology, and 
        Business and Data Analytics.   
      </p>
    );
    const two = (
      <p>
        Outside of work, I love playing and watching sports particularly Basketball and
        Soccer. I also love playing video games and binging TV Shows!
      </p>
    );

    const tech_stack = [
      "Python",
      "Java",
      "React.js",
      "Microsoft Azure",
      "AWS",
      "SQL",
      "Data Analysis",
      "Information Technology",
      "Network Security",
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I am proficient with and my skill sets:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="raiyan islam" src={"/assets/aipicofmeee.png"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
