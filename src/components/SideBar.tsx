import gitHubLogo from "../assets/github-mark-white.png";
import linkedInLogo from "../assets/LI-In-Bug.png";

export default function Sidebar() {
    return(
        <>
            {/*<script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>*/}
            <div className="sideForm">
                {/*<div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark"*/}
                {/*     data-type="VERTICAL" data-vanity="richmondbrininger" data-version="v1"><a*/}
                {/*    className="badge-base__link LI-simple-link"*/}
                {/*    href="https://www.linkedin.com/in/richmondbrininger?trk=profile-badge"></a>*/}
                {/*</div>*/}
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