import Box from "@mui/material/Box";
import type {Job} from "../types/Job.tsx";

interface TabPanelProps {
    children: Job;
    index: number;
    value: number;
}

export default function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box className="bulletList">
                <p>{children.position}&emsp;&emsp;&emsp;{children.location} ({children.workType})&emsp;&emsp;&emsp;{children.startDate} - {children.endDate}</p>
                {children.descriptions.map((job, index) => (
                    <ul>
                        <li key={index}>{job}</li>
                    </ul>
                ))}
                </Box>}
        </div>
    );
}