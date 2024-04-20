import {useContext, useEffect, useReducer, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {MenuList, MenuList2} from "../elements/MenuArr";
import {HeaderSocialIcon} from "../elements/JsonData";
import {Context} from "../context/contextApi.tsx";

const reducer = (previousState: Element, updatedState: any) => {
  return {
    ...previousState,
    ...updatedState,
  };
};

const initialState = {
  activeSubmenu: "",
};

const Menu = () => {
  const location = useLocation();
  const [menuactive, setMenuactive] = useState("");
  const { setSidebarShow } = useContext(Context);

  const [state, setState] = useReducer(reducer, initialState);
  const menuHandler = (status: string) => {
    setState({ activeSubmenu: status });
    setSidebarShow(false);
    if (state.activeSubmenu === status) {
      setState({ activeSubmenu: "" });
    }
  };

  useEffect(() => {
    MenuList.map((item: any) => {
      item.child?.map((data: any) => {
        if (data.to === location.pathname) {
          setMenuactive(item.menu);
        }
      });
    });
    MenuList2.map((item: any) => {
      if (item?.to === location.pathname) {
        setMenuactive(item.menu);
      }
      item.child?.map((data: any) => {
        if (data?.to === location.pathname) {
          setMenuactive(item.menu);
        }
      });
    });
  }, [location.pathname]);

  return (
    <>
      <ul className="nav navbar-nav navbar navbar-left">
        {MenuList.map((item: any, ind: number) => {
          const { menu, child, className } = item;
          if (className === "menu-down") {
            return (
                <li
                    className={`sub-menu-down ${
                        menuactive == item.menu ? "active" : ""
                    }
                ${state.activeSubmenu === item.menu ? "open" : ""}
                `}
                    key={ind}
                >
                  <Link
                      to="#"
                      onClick={() => {
                        menuHandler(item.menu);
                      }}
                  >
                    {menu}
                  </Link>
                  <ul className="sub-menu">
                    {child?.map((data: any, index: number) => (
                        <li key={index}>
                          <Link to={data.to}>{data.children}</Link>
                        </li>
                    ))}
                  </ul>
                </li>
            );
          } else {
            return (
                <li key={ind}>
                  <Link onClick={() => {
                    setSidebarShow(false);
                  }} to={`${item?.to}`}>{item.menu}</Link>
                </li>
            );
          }
        })}
      </ul>
      <ul className="nav navbar-nav navbar navbar-right">
        {MenuList2.map((item: any, ind: number) => {
          const { menu, child, className } = item;
          if (className === "menu-down") {
            return (
              <li
                className={`sub-menu-down ${
                  menuactive == item.menu ? "active" : ""
                }
                ${state.activeSubmenu === item.menu ? "open" : ""}
                `}
                key={ind}
              >
                <Link
                  to="#"
                  onClick={() => {
                    menuHandler(item.menu);
                  }}
                >
                  {menu}
                </Link>
                <ul className="sub-menu">
                  {child?.map((data: any, index: number) => (
                    <li key={index}>
                      <Link to={data.to}>{data.children}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          } else {
            return (
              <li key={ind}>
                <Link onClick={() => {
                  setSidebarShow(false);
                }} to={`${item?.to}`}>{item.menu}</Link>
              </li>
            );
          }
        })}
      </ul>
      <div className="dz-social-icon">
        RBQ 5847-8348-01
      </div>
      <div className="dz-social-icon">
        <ul>
          {HeaderSocialIcon.map((icons, ind) => (
            <li key={ind}>
              <Link className={icons.icon} to="https://www.facebook.com/people/Construction-Phoenix-Signature/61557705460866"></Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
