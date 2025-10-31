import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {useRef, useState} from "react";
import * as React from "react";
import type {School} from "../types/School.tsx";
import SchoolTabPanel from "./SchoolTabPanel.tsx";


interface WorkTabsProps {
    schools: School[];
}

export default function SchoolSection(props: WorkTabsProps) {
    const {schools} = props;
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
                    {schools.map((school: School) => (
                        <Tab label={school.schoolName} key={school.schoolName} onClick={handleUnselect}/>
                    ))}
                </Tabs>
            </Box>
            {schools.map((school: School, index: number) => (
                <SchoolTabPanel value={value} index={index} key={index || "-1"}>
                    {school}
                </SchoolTabPanel>
            ))}
        </Box>
    );
}