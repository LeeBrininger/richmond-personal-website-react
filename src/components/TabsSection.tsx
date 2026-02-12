import TabComponent from "./TabComponent.tsx";
import { jobList } from "../data/jobList.tsx";
import { schoolList } from "../data/schoolList.tsx";
import { certificationList } from "../data/certificationList.tsx";
import GlobeSection from "./GlobeSection.tsx";
import { useState } from "react";
import { SelectionContext } from "./SelectionContext.tsx";
import WorkTabPanel from "./panels/WorkTabPanel.tsx";
import SchoolTabPanel from "./panels/SchoolTabPanel.tsx";
import CertificationTabPanel from "./panels/CertificationTabPanel.tsx";

export default function TabsSection() {
  const [selection, setSelection] = useState("career");
  const workTabPanel = WorkTabPanel;
  const schoolTabPanel = SchoolTabPanel;
  const certificationTabPanel = CertificationTabPanel;
  const selectionValue = {
    selection,
    setSelection,
  };

  return (
    <SelectionContext.Provider value={selectionValue}>
      <GlobeSection className="mapContainer" />
      <div className="contentContainer">
        <div className="slidingPanel">
          <h2>Career</h2>
          <TabComponent SubComponent={workTabPanel} values={jobList} />
        </div>
        <div className="slidingPanel">
          <h2>Education</h2>
          <TabComponent SubComponent={schoolTabPanel} values={schoolList} />
        </div>
        <div className="slidingPanel">
          <h2>Certifications</h2>
          <TabComponent
            SubComponent={certificationTabPanel}
            values={certificationList}
          />
        </div>
      </div>
    </SelectionContext.Provider>
  );
}
