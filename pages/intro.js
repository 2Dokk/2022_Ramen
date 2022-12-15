import Ramen from "../component/Ramen";
import IntroRamen from "../component/IntroRamen";
import OffButton from "../component/Offcanvas";
import Link from "next/link";

const Intro = () => {
  return (
    <>
      <IntroRamen />
      <OffButton />
    </>
  );
};

export default Intro;
