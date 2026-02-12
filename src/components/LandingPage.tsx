import {about} from "../data/about.tsx";

export default function LandingPage() {

    return(
        <header className="landingPage">
            <h1 className="landingTitle">Richmond Brininger</h1>
            <h2 className="landingTitle">Senior Fullstack Developer</h2>
            <p className="description">{about}</p>
        </header>
);
}