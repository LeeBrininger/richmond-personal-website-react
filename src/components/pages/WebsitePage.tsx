import { useState } from "react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import PagePanel from "../panels/PagePanel";
import PageAnimator from "../motion/PageAnimator";

export default function WebsitePage() {
  const [index, setIndex] = useState({ index: 0, direction: "right" });

  const pages = [
    <PagePanel name="About React" />,
    <PagePanel name="About AWS" />,
    <PagePanel name="About Figma" />,
  ];

  return (
    <div className="website-container">
      <h1>My Website</h1>
      <div className="website-layout">
        <button
          className="website-button"
          onClick={() =>
            setIndex((index) => ({
              index: (index.index - 1 + pages.length) % pages.length,
              direction: "left",
            }))
          }
        >
          <ArrowLeft />
        </button>
        <PageAnimator pages={pages} index={index} />
        <button
          className="website-button"
          onClick={() =>
            setIndex((index) => ({
              index: (index.index + 1) % pages.length,
              direction: "right",
            }))
          }
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
