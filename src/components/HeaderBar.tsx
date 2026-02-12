import { metadata } from "../data/metadata.tsx";
import figmaLogo from "/figma-logo.png";
import gitHubLogo from "/github-mark-white.png";
import linkedInLogo from "/LI-In-Bug.png";

export default function HeaderBar() {
  return (
    <header className="headerBar">
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="author" content={metadata.author} />
      <meta name="charset" charSet={metadata.charset} />
      <div className="headerName">
        <h1>Richmond Brininger</h1>
      </div>
      <div className="logos">
        <h1>Richmond Brininger</h1>
        <a href="https://www.figma.com/site/HgtKtjqiDaoBmfgxTNj3Rm/Richmond-Website?node-id=0-1&t=ogF7uen3WTK0xC11-1">
          <img src={figmaLogo} className="logo" alt="Figma logo" />
        </a>
        <a href="https://www.linkedin.com/in/richmondbrininger">
          <img src={linkedInLogo} className="logo" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/LeeBrininger/richmond-personal-website-react.git">
          <img src={gitHubLogo} className="logo" alt="GitHub logo" />
        </a>
      </div>
    </header>
  );
}
