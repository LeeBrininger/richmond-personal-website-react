import WorkSection from "./WorkSection.tsx";
import {jobList} from "../data/jobList.tsx";
import {schoolList} from "../data/schoolList.tsx";
import SchoolSection from "./SchoolSection.tsx";

export default function TabsSection() {
    return (
        <div className="tabContainer">
            <h2>Career</h2>
            <WorkSection jobs={jobList} />
            <h2>Education</h2>
            <SchoolSection schools={schoolList} />
        </div>
    );
}