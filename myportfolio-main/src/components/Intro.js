import React from "react";
import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }

  render() {
    return (
      <div id="intro">
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"Hello I'm, "}
            <span className="intro-name">{"Raiyan"}</span>
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">Check out my Portfolio!</div>
          <div className="intro-desc">
            Computer Engineering graduate and tech enthusiast passionate about data, cloud, security, and software development — always learning, always building.
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
