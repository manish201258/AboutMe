import React, { useState, useEffect } from "react";
import gsap from "gsap";

const Skills = () => {
  const [isProgrammingVisible, setIsProgrammingVisible] = useState(false);
  const [isTechnoVisible, setIsTechnoVisible] = useState(false);

  const toggleProgrammingVisibility = () => {
    if (isTechnoVisible) {
      setIsTechnoVisible(false);
    }
    setIsProgrammingVisible(!isProgrammingVisible);
  };

  const toggleTechnoVisibility = () => {
    if (isProgrammingVisible) {
      setIsProgrammingVisible(false);
    }
    setIsTechnoVisible(!isTechnoVisible);
  };

  useEffect(() => {
    gsap.fromTo(
      ".skill-animate",
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.4 }
    );
  }, [isProgrammingVisible, isTechnoVisible]);

  useEffect(() => {
    gsap.to(".skillImgToggle-img1", {
      rotate: isProgrammingVisible ? 180 : 0,
      duration: 0.4,
    });
    gsap.to(".skillImgToggle-img2", {
      rotate: isTechnoVisible ? 180 : 0,
      duration: 0.4,
    });
  }, [isProgrammingVisible, isTechnoVisible]);

  return (
    <div className="skills">
      <div className="d-flex flex-column align-items-center gap-4">
        <div className="d-flex flex-column align-items-center">
          <h3 className="fw-bold">Skills</h3>
          <p className="abouttext" style={{ color: "#aca4a4" }}>
            My technical level
          </p>
        </div>
        <div
          className="skill-main-div d-flex justify-content-between"
          style={{ width: "60%" }}
        >
          {/* Programming Languages Section */}
          <div className="d-flex flex-column align-items-center gap-4">
            <div className="d-flex gap-5"onClick={toggleProgrammingVisibility}>
              <div
                className="d-flex align-items-center gap-3"
                
                style={{ cursor: "pointer" }}
              >
                <img src="/programmnig.png" alt="Programming" />
                <p className="m-0">Programming Languages</p>
              </div>
              <div className="skillImgToggle d-flex align-items-center">
                <img
                  className="skillImgToggle-img1"
                  src="/closedarrow.png"
                  alt=""
                />
              </div>
            </div>
            {isProgrammingVisible && (
              <div className="skill-animate d-flex flex-column gap-3">
                <li>C++</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Java</li>
              </div>
            )}
          </div>
          {/* Technologies Section */}
          <div className="d-flex flex-column align-items-center gap-4">
            <div className="d-flex gap-5" onClick={toggleTechnoVisibility}>
              <div
                className="d-flex align-items-center gap-3"
                style={{ cursor: "pointer" }}
              >
                <img src="/technology.png" alt="Technologies" />
                <p className="m-0">Technologies</p>
              </div>
              <div className="skillImgToggle d-flex align-items-center">
                <img
                  className="skillImgToggle-img2"
                  src="/closedarrow.png"
                  alt=""
                />
              </div>
            </div>
            {isTechnoVisible && (
              <div className="skill-animate d-flex flex-column gap-3">
                <li>Git</li>
                <li>React</li>
                <li>NodeJs</li>
                <li>Bootstrap</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
