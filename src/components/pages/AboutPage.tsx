import { about } from "../../data/about";

export default function AboutPage() {
  return (
    <div className="about-container">
      <h1>ABOUT ME</h1>
      <p className="about-paragraph">{about}</p>
      <h1>PERSONAL</h1>
      <p className="about-paragraph">{about}</p>
    </div>
  );
}
