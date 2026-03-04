import HeaderBar from "../HeaderBar.tsx";
import LandingPage from "./LandingPage.tsx";
import { lazy, Suspense, useEffect, useState } from "react";
import AboutPage from "./AboutPage.tsx";
import Slider from "../motion/Slider.tsx";
const ResumePage = lazy(() => import("./ResumePage.tsx"));
const WebsitePage = lazy(() => import("./WebsitePage.tsx"));

export type visibleArray = {
  landing: boolean;
  resume: boolean;
  about: boolean;
  website: boolean;
};

export default function RoutePage() {
  const [isVisible, setIsVisible] = useState<visibleArray>({
    landing: true,
    resume: false,
    about: false,
    website: false,
  });

  const MOBILE_BREAKPOINT = 768;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slideOffScreen = (active: string) => {
    setIsVisible(() => {
      let values: visibleArray;
      switch (active) {
        case "landing":
          values = {
            landing: true,
            resume: false,
            about: false,
            website: false,
          };
          break;
        case "resume":
          values = {
            landing: false,
            resume: true,
            about: false,
            website: false,
          };
          break;
        case "about":
          values = {
            landing: false,
            resume: false,
            about: true,
            website: false,
          };
          break;
        case "website":
          values = {
            landing: false,
            resume: false,
            about: false,
            website: true,
          };
          break;
        default:
          values = {
            landing: true,
            resume: false,
            about: false,
            website: false,
          };
          break;
      }
      return { ...values };
    });
  };

  const randomDirection = () => {
    const min = 1;
    const max = 6;
    const newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    switch (newNumber) {
      case 1:
        return "up";
      case 2:
        return "upLeft";
      case 3:
        return "upRight";
      case 4:
        return "down";
      case 5:
        return "downLeft";
      case 6:
        return "downRight";
      default:
        return "up";
    }
  };

  return (
    <>
      <HeaderBar actionMain={slideOffScreen} />
      <div className="mainLayout">
        <Slider
          direction={randomDirection()}
          visible={isVisible.landing}
          starting={true}
        >
          <LandingPage actionMain={slideOffScreen} />
        </Slider>
        <Slider
          direction={randomDirection()}
          visible={isVisible.resume}
          starting={false}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <div className={isMobile ? "mainContainer-phone" : "mainContainer"}>
              <ResumePage mobile={isMobile} />
            </div>
          </Suspense>
        </Slider>
        <Slider
          direction={randomDirection()}
          visible={isVisible.about}
          starting={false}
        >
          <AboutPage />
        </Slider>
        <Slider
          direction={randomDirection()}
          visible={isVisible.website}
          starting={false}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <WebsitePage />
          </Suspense>
        </Slider>
      </div>
    </>
  );
}
