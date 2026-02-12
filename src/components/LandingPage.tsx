import { about } from "../data/about.tsx";
import SliderScroll from "./SliderScroll.tsx";
import headerVid from "/coding.gif";
import selfe from "/src/assets/selfie.jpeg";
import { prewarm } from "maplibre-gl";

type LandingPageProps = {
  actionMain: (page: string) => void;
};

export default function LandingPage(props: LandingPageProps) {
  const { actionMain } = props;

  prewarm();

  return (
    <header className="landingPage">
      <img className="headerVideo" src={headerVid} alt="coding animation" />
      <div className="landingContent">
        <SliderScroll startLocation={{ x: 0, y: -300 }}>
          <h1 className="landingTitle">Richmond Brininger</h1>
        </SliderScroll>
        <SliderScroll startLocation={{ x: 300, y: 0 }}>
          <h2 className="landingTitle">Senior Fullstack Developer</h2>
        </SliderScroll>
        <p className="description">{about}</p>
        <SliderScroll startLocation={{ x: -300, y: 0 }}>
          <div className="landingButton">
            <button
              className="btn btn-outline-primary"
              onClick={() => actionMain("resume")}
            >
              Click to Learn More
            </button>
          </div>
        </SliderScroll>
      </div>
      <div>
        {/* Use curly braces to embed the dynamic variable */}
        <img className="selfie" src={selfe} alt="Selfie" />
      </div>
    </header>
  );
}
