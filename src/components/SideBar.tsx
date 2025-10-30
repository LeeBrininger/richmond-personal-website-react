import gitHubLogo from "../assets/github-mark-white.png";
import linkedInLogo from "../assets/LI-In-Bug.png";

export default function Sidebar() {
    return(
        <>
           <div className="sideForm">
                <div>
                    <a href="https://www.linkedin.com/in/richmondbrininger">
                        <img src={linkedInLogo} className="logo LinkedIn" alt="LinkedIn logo"/>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/LeeBrininger/richmond-personal-website-react.git">
                        <img src={gitHubLogo} className="logo github" alt="GitHub logo"/>
                    </a>
                </div>
            </div>
        </>
    );
}