import { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import OffButton from "../component/Offcanvas";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const TEXTS = [
  "라멘트럭",
  "소박한이야기",
  "멘타카무쇼",
  "담택",
  "멘야준",
  "하카다분코",
  "라멘반라이",
  "코카이라멘",
  "김씨네심야식당",
  "무겐스위치",
  "하쿠텐",
  "566라멘",
  "하나라멘",
  "미츠루",
];

const Roulette = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [index, setIndex] = useState(0);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      300 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  //   default The default.
  // gentle
  // wobbly
  // stiff
  // slow
  // molasses
  return (
    <div id="RContainer">
      <h1 id="Roulette">
        <TextTransition springConfig={presets.gentle} className="rText">
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
        <div id="Scale"></div>
      </h1>
      <Link id="stopMom" href={"./Store/" + `${TEXTS[index % TEXTS.length]}`}>
        <div>
          <Button variant="dark" id="stop">
            멈춰!
          </Button>
        </div>
      </Link>
      <OffButton />
    </div>
  );
};

export default Roulette;
