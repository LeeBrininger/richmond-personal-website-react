import { useContext, useRef, useState, type SyntheticEvent } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { SelectionContext } from "./SelectionContext.tsx";

interface TabComponentProps {
  SubComponent: any;
  values: any[];
}

export default function TabComponent(props: TabComponentProps) {
  const { SubComponent, values } = props;
  const [selected, setSelected] = useState(false);
  const changed = useRef<boolean>(false);
  const { setSelection } = useContext(SelectionContext);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (_event: SyntheticEvent, newValue: any) => {
    changed.current = true;
    setSelected(newValue);
    setSelection(values[newValue]);
  };

  const handleUnselect = () => {
    if (changed.current) {
      changed.current = false;
    } else {
      setSelected(false);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selected}
          onChange={handleChange}
          centered
          aria-label="basic tabs"
        >
          {values.map((value: any) => (
            <Tab label={value.name} key={value.name} onClick={handleUnselect} />
          ))}
        </Tabs>
      </Box>
      {values.map((value: any, index: number) => (
        <SubComponent value={selected} index={index} key={value.name}>
          {value}
        </SubComponent>
      ))}
    </Box>
  );
}
