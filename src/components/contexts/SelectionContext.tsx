import { createContext } from "react";

type Content = {
  selection: any;
  setSelection: (selection: any) => void;
};

const initial: Content = {
  selection: {},
  setSelection: () => {},
};

export const SelectionContext = createContext(initial);
