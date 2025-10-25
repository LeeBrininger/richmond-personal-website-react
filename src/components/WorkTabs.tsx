import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {useState} from "react";
import * as React from "react";
import TabPanel from "./TabPanel";
import type {Job} from "../types/Job.tsx";


interface WorkTabsProps {
    jobs: Job[];
}

export default function WorkTabs(props: WorkTabsProps) {
    const {jobs} = props;
    const [value, setValue] = useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {jobs.map((job: Job) => (
                        <Tab label={job.companyName} />
                    ))}
                </Tabs>
            </Box>
            {jobs.map((job: Job, index: number) => (
                <TabPanel value={value} index={index}>
                    {job}
                </TabPanel>
            ))}
        </Box>
    );
}