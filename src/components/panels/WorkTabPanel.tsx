import Box from "@mui/material/Box";
import type { Job } from "../../types/Job.tsx";

interface TabPanelProps {
  children: Job;
  index: any;
  value: any;
  mobile: boolean;
}

export default function WorkTabPanel(props: TabPanelProps) {
  const { children, value, index, mobile, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`work-tabpanel-${index}`}
      aria-labelledby={`work-tab-${index}`}
      key={children.name}
      {...other}
    >
      {value === index && (
        <Box className="bulletList">
          <p className={mobile ? "string-container-phone" : "string-container"}>
            <span className={!mobile ? "left-title" : ""}>
              {children.position}
            </span>
            <span>{`${children.startDate} - ${children.endDate}`}</span>
            <span className="right-title">{children.location}</span>
          </p>
          {children.descriptions.map((job, index) => (
            <ul key={index}>
              <li>{job}</li>
            </ul>
          ))}
        </Box>
      )}
    </div>
  );
}
