import Box from "@mui/material/Box";
import type { School } from "../../types/School.tsx";

interface TabPanelProps {
  children: School;
  index: any;
  value: any;
  mobile: boolean;
}

export default function SchoolTabPanel(props: TabPanelProps) {
  const { children, value, index, mobile, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`school-tabpanel-${index}`}
      aria-labelledby={`school-tab-${index}`}
      key={index || "none"}
      {...other}
    >
      {value === index && (
        <Box className="bulletList">
          <p className={mobile ? "string-container-phone" : "string-container"}>
            <span className={!mobile ? "left-title" : ""}>
              {children.degreeName}
            </span>
            <span>{`${children.startDate} - ${children.endDate}`}</span>
            <span className="right-title">{children.degreeType}</span>
          </p>
          {children.descriptions.map((school: any) => (
            <ul key={school}>
              <li>{school}</li>
            </ul>
          ))}
        </Box>
      )}
    </div>
  );
}
