import {
  useContext,
  useRef,
  useState,
  type RefObject,
  type SyntheticEvent,
} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { SelectionContext } from "./contexts/SelectionContext.tsx";

interface TabComponentProps {
  SubComponent: any;
  values: any[];
  containerRef: RefObject<HTMLDivElement | null>;
  mobile: boolean;
}

export default function TabComponent(props: TabComponentProps) {
  const { SubComponent, values, containerRef, mobile } = props;
  const [selected, setSelected] = useState(false);
  const changed = useRef<boolean>(false);
  const { setSelection } = useContext(SelectionContext);

  const handleChange = (_event: SyntheticEvent, newValue: any) => {
    changed.current = true;
    setSelected(newValue);
    setSelection(values[newValue]);

    setTimeout(() => {
      if (containerRef.current) {
        const elementPosition =
          containerRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 125;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 200);
  };

  const handleUnselect = () => {
    if (changed.current) {
      changed.current = false;
    } else {
      setSelected(false);
    }
  };

  return (
    <Box>
      <Box className="box-format">
        <Tabs
          value={selected}
          onChange={handleChange}
          centered
          aria-label="basic tabs"
          orientation={mobile ? "vertical" : "horizontal"}
        >
          {values.map((value: any) => (
            <Tab label={value.name} key={value.name} onClick={handleUnselect} />
          ))}
        </Tabs>
      </Box>
      {values.map((value: any, index: number) => (
        <SubComponent
          value={selected}
          index={index}
          key={value.name}
          mobile={mobile}
        >
          {value}
        </SubComponent>
      ))}
    </Box>
  );
}
