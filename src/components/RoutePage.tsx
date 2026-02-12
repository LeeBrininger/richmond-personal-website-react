import HeaderBar from "./HeaderBar.tsx";
import LandingPage from "./LandingPage.tsx";
import Slider from "./Slider.tsx";
import TabsSection from "./TabsSection.tsx";
import { useState } from "react";

export type visibleArray = {
  landing: boolean;
  resume: boolean;
};

export default function RoutePage() {
  const [isVisible, setIsVisible] = useState<visibleArray>({
    landing: true,
    resume: false,
  });

  const slideOffScreen = (active: string) => {
    setIsVisible(() => {
      let values: visibleArray;
      switch (active) {
        case "landing":
          values = {
            landing: true,
            resume: false,
          };
          break;
        case "resume":
          values = {
            landing: false,
            resume: true,
          };
          break;
        default:
          values = {
            landing: true,
            resume: false,
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
          <div className="mainContainer">
            <TabsSection />
          </div>
        </Slider>
      </div>
    </>
  );
}
