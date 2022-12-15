import Image from "next/image";
import Link from "next/link";
import { RamenImg } from "../public/ramen.png";

const Ramen = () => {
  return (
    <div className="mainContainer">
      <div className="mainText">Ramen</div>
      <div className="mainImage">
        <Link href={"./intro"}>
          <Image
            src="/../public/ramen.png"
            alt="ramen"
            priority
            width={500}
            height={500}
          />
        </Link>
      </div>
      {/* <div className="dropdown">
        <DropdownButton
          id="dropdown-basic-button"
          className="dropdownButton"
          title="≡"
        >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </div> */}
    </div>
  );
};

export default Ramen;
