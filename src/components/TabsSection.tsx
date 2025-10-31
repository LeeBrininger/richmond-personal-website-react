import TabComponent from "./TabComponent.tsx";
import {jobList} from "../data/jobList.tsx";
import {schoolList} from "../data/schoolList.tsx";
import {certificationList} from "../data/certificationList.tsx";


export default function TabsSection() {
    return (
        <div className="tabContainer">
            <h2>Career</h2>
            <TabComponent jobs={jobList} />
            <h2>Education</h2>
            <TabComponent schools={schoolList} />
            <h2>Certifications</h2>
            <TabComponent certifications={certificationList} />
        </div>
    );
}