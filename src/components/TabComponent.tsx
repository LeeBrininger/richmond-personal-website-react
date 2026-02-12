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
import { SelectionContext } from "./SelectionContext.tsx";

interface TabComponentProps {
  SubComponent: any;
  values: any[];
  containerRef: RefObject<HTMLDivElement | null>;
}

export default function TabComponent(props: TabComponentProps) {
  const { SubComponent, values, containerRef } = props;
  const [selected, setSelected] = useState(false);
  const changed = useRef<boolean>(false);
  const { setSelection } = useContext(SelectionContext);

  // useEffect(() => {
  //   if (itemRef.current) {
  //     const elementPosition = itemRef.current.getBoundingClientRect().top;
  //     const offsetPosition = elementPosition + window.pageYOffset - 20; // Subtract 20px for offset

  //     console.log(itemRef);

  //     // window.scrollTo({
  //     //   top: offsetPosition,
  //     //   behavior: "smooth",
  //     // });
  //     setTimeout(() => {
  //       itemRef.current!.scrollIntoView({
  //         behavior: "smooth", // Optional: for a smooth scrolling animation
  //         block: "end", // Optional: aligns the top of the element to the top of the visible area
  //       });
  //     }, 10);
  //   }
  // }, [selected]);

  const handleChange = (_event: SyntheticEvent, newValue: any) => {
    changed.current = true;
    setSelected(newValue);
    setSelection(values[newValue]);

    setTimeout(() => {
      if (containerRef.current) {
        const elementPosition =
          containerRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 100;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 10);
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
