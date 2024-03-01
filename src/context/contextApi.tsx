import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface AppContextValue {
  sidebarShow: boolean;
  setSidebarShow: Dispatch<SetStateAction<boolean>>;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  modabox: boolean;
  setModabox: Dispatch<SetStateAction<boolean>>;
  searchbox: boolean;
  setSearchbox: Dispatch<SetStateAction<boolean>>;
  sidebar: boolean;
  setSidebar: Dispatch<SetStateAction<boolean>>;
  switcheData: object;
  setSwitcheData: Dispatch<SetStateAction<object>>;
}

const defaultState: AppContextValue = {
  sidebarShow: false,
  setSidebarShow: () => {},
  show: false,
  setShow: () => {},
  modabox: false,
  setModabox: () => {},
  searchbox: false,
  setSearchbox: () => {},
  sidebar: false,
  setSidebar: () => {},
  switcheData: {},
  setSwitcheData: () => {},
};

export const Context = createContext(defaultState);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [show, setShow] = useState(false);
  const [modabox, setModabox] = useState(false);
  const [searchbox, setSearchbox] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [switcheData, setSwitcheData] = useState({});
  const [sidebarShow, setSidebarShow] = useState<boolean>(false);

  const contextValue: AppContextValue = {
    show,
    setShow,
    modabox,
    setModabox,
    searchbox,
    setSearchbox,
    sidebar,
    setSidebar,
    switcheData,
    setSwitcheData,
    sidebarShow,
    setSidebarShow,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
