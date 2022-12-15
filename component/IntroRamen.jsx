import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Link from "next/link";
import Image from "next/image";

const IntroRamen = () => {
  const [open0, setOpen0] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <>
      <div className="introContainer">
        <Button
          className="introButton"
          onClick={() => setOpen0(!open0)}
          aria-controls="example-collapse-text"
          aria-expanded={open0}
        >
          라멘이란?
        </Button>
        <div style={{ minHeight: "170px" }}>
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
            aria-expanded={open1}
          >
            라멘의 종류
          </Button>
        </div>
        <div style={{ minHeight: "170px" }}>
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
        <Button
          className="introButton"
          onClick={() => setOpen2(!open2)}
          aria-controls="example-collapse-text"
          aria-expanded={open2}
        >
          라멘의 구성
        </Button>
        <div style={{ minHeight: "170px" }}>
          <Collapse in={open2} dimension="width">
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
            onClick={() => setOpen3(!open3)}
            aria-controls="example-collapse-text"
            aria-expanded={open3}
          >
            라멘의 역사
          </Button>
        </div>
        <div style={{ minHeight: "170px" }}>
          <Collapse in={open3} dimension="width">
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
        <div className="mainImage" id="introImg">
          <Image
            src="/../public/ramen.png"
            alt="ramen"
            priority
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default IntroRamen;
