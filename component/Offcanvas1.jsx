import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "next/image";
import Link from "next/link";

const OffButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Image
        src="/../public/ramenBtn.png"
        alt="ramen"
        id="OffBtn"
        priority
        width={100}
        height={100}
        onClick={handleShow}
        style={{ cursor: "pointer" }}
      />
      <Image
        src="/../public/ramenBtn.png"
        alt="ramen"
        id="OnBtn"
        priority
        width={150}
        height={150}
        onClick={handleShow}
        style={{ cursor: "pointer" }}
      />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="menuTitle">Menu</div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="menu">
            <Link href={"../"} className="menuText">
              메인
            </Link>
          </div>
          <div className="menu">
            <Link href={"../intro"} className="menuText">
              라멘이란?
            </Link>
          </div>
          <div className="menu">
            <Link href={"../roulette"} className="menuText">
              오늘 갈 라멘집은?
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffButton;
