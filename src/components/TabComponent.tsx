import {useEffect, useRef, useState} from "react";
import * as React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import type {School} from "../types/School.tsx";
import SchoolTabPanel from "./SchoolTabPanel.tsx";
import type {Job} from "../types/Job.tsx";
import WorkTabPanel from "./WorkTabPanel.tsx";
import type {Certification} from "../types/Certification.tsx";
import CertificationTabPanel from "./CertificationTabPanel.tsx";



interface WorkTabsProps {
    jobs?: Job[];
    schools?: School[];
    certifications?: Certification[];
}

export default function TabComponent(props: WorkTabsProps) {
    const {jobs, schools, certifications} = props;
    const [value, setValue] = useState(false);
    const [tabNames, setTabNames] = useState<string[]>([]);
    const changed = useRef<boolean>(false);


    useEffect(() => {
        if(jobs){
            setTabNames(jobs.map(job => job.name));
        } else if(schools) {
            setTabNames(schools.map(school => school.name));
        } else if(certifications) {
            setTabNames(certifications.map(certification => certification.name));
        }
    }, [certifications, jobs, schools]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (_event: React.SyntheticEvent, newValue: any) => {
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
                <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs">
                    {tabNames.map((name: string) => (
                        <Tab label={name} key={name} onClick={handleUnselect}/>
                    ))}
                </Tabs>
            </Box>
            {jobs &&
                jobs.map((job: Job, index: number) => (
                        <WorkTabPanel value={value} index={index} key={index || "-1"}>
                            {job}
                        </WorkTabPanel>
                ))
            }
            {schools &&
                schools.map((school: School, index: number) => (
                    <SchoolTabPanel value={value} index={index} key={index || "-1"}>
                        {school}
                    </SchoolTabPanel>
                ))
            }
            {certifications &&
                certifications.map((certification: Certification, index: number) => (
                    <CertificationTabPanel value={value} index={index} key={index || "-1"}>
                        {certification}
                    </CertificationTabPanel>
                ))
            }
        </Box>
    );
}