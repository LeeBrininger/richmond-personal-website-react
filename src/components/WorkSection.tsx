import WorkTabs from "./WorkTabs.tsx";
import {jobList} from "../data/jobList.tsx";

interface WorkEntryProps {
    title: string;
    description: string;
}


export default function WorkSection(props: Readonly<WorkEntryProps>) {
    const{description} = props;
    return (
        <div>
            <h2>{description}</h2>
            <WorkTabs jobs={jobList} />
        </div>
    );
}