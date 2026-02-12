import { about } from "../data/about.tsx";
import headerVid from "/coding.gif";
import { prewarm } from "maplibre-gl";

type LandingPageProps = {
  actionMain: () => void;
};

export default function LandingPage(props: LandingPageProps) {
  const { actionMain } = props;

  prewarm();

  return (
    <header className="landingPage">
      <img className="headerVideo" src={headerVid} alt="coding animation" />
      <div className="landingContent">
        <h1 className="landingTitle">Richmond Brininger</h1>
        <h2 className="landingTitle">Senior Fullstack Developer</h2>
        <p className="description">{about}</p>
        <div className="landingButton">
          <button className="btn btn-outline-primary" onClick={actionMain}>
            Click to Learn More
          </button>
        </div>
      </div>
    </header>
  );
}
