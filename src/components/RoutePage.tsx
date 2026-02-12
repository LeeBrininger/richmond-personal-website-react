import LandingPage from "./LandingPage.tsx";
import Slider from "./Slider.tsx";
import TabsSection from "./TabsSection.tsx";
import { useState } from "react";

export type visibleArray = {
  landing: boolean;
  resume: boolean;
  globe: boolean;
};

export default function RoutePage() {
  const [isVisible, setIsVisible] = useState<visibleArray>({
    landing: true,
    resume: false,
    globe: false,
  });

  const slideOffScreen = () => {
    setIsVisible(() => {
      const values: visibleArray = {
        landing: false,
        resume: true,
        globe: false,
      };
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
