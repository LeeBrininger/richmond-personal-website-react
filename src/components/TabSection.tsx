import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {useRef, useState} from "react";
import * as React from "react";
import TabPanel from "./TabPanel";
import type {Job} from "../types/Job.tsx";


interface WorkTabsProps {
    jobs: Job[];
}

export default function TabSection(props: WorkTabsProps) {
    const {jobs} = props;
    const [value, setValue] = useState(false);
    const changed = useRef<boolean>(false);

    const handleChange = (_event: React.SyntheticEvent, newValue: any) => {
        console.log("change");
        changed.current = true;
        setValue(newValue);
    };

    const handleUnselect = () => {
        if(changed.current){
            changed.current = false;
        } else {
            setValue(false);
        }
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example">
                    {jobs.map((job: Job) => (
                        <Tab label={job.companyName} key={job.companyName} onClick={handleUnselect}/>
                    ))}
                </Tabs>
            </Box>
            {jobs.map((job: Job, index: number) => (
                <TabPanel value={value} index={index} key={index || "-1"}>
                    {job}
                </TabPanel>
            ))}
        </Box>
    );
}