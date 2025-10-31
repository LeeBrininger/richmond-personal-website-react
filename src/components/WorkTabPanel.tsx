import Box from "@mui/material/Box";
import type {Job} from "../types/Job.tsx";

interface TabPanelProps {
    children: Job;
    index: any;
    value: any;
}

export default function WorkTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`work-tabpanel-${index}`}
            aria-labelledby={`work-tab-${index}`}
            key={index || "none"}
            {...other}
        >
            {value === index && <Box className="bulletList">
                <p className="string-container">
                    <span className="left-title">{children.position}</span>
                    <span>{`${children.startDate} - ${children.endDate}`}</span>
                    <span className="right-title">{children.location}</span>
                </p>
                {children.descriptions.map((job, index) => (
                    <ul>
                        <li key={index}>{job}</li>
                    </ul>
                ))}
                </Box>}
        </div>
    );
}