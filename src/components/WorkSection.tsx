import TabSection from "./TabSection.tsx";
import {jobList} from "../data/jobList.tsx";

interface WorkEntryProps {
    title: string;
    description: string;
}


export default function WorkSection(props: Readonly<WorkEntryProps>) {
    const{description} = props;
    return (
        <div className="tabContainer">
            <h2>{description}</h2>
            <TabSection jobs={jobList} />
        </div>
    );
}