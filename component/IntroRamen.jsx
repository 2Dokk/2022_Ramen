import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";

const IntroRamen = () => {
  const [open0, setOpen0] = useState(false);
  const [open1, setOpen1] = useState(false);
  return (
    <>
      <Button
        className="introButton"
        onClick={() => setOpen0(!open0)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        라멘이란?
      </Button>
      <div style={{ minHeight: "150px" }}>
        <Collapse in={open0} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: "400px" }}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card>
          </div>
        </Collapse>
      </div>
      <div className="introButtonRight">
        <Button
          className="introButton introButtonRight"
          onClick={() => setOpen1(!open1)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          라멘의 종류
        </Button>
      </div>
      <div style={{ minHeight: "150px" }}>
        <Collapse in={open1} dimension="width">
          <div className="rightStart">
            <Card body className="rightStart" style={{ width: "400px" }}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default IntroRamen;
