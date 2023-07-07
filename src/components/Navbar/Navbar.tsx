import * as React from "react";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Navbar.module.scss";
import {
  IoSearchOutline,
  IoPersonOutline,
  IoBagHandleOutline,
} from "react-icons/io5";

interface ComponentProps {}

const Navbar: React.FC<ComponentProps> = ({}) => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  const NavButton = ({ icon }: any) => {
    return <div>{icon}</div>;
  };
  // RETURN -------------------------
  return (
    <div className={`${styles.Navbar}`}>
      <div className={`${styles.Navbar__sx}`}>
        <div className={`${styles.Navbar__logo__container}`}>Logo</div>
      </div>
      <div className={`${styles.Navbar__center}`}>
        <Dropdown
          buttonName={"Home"}
          dropDownList={[
            {
              name: "string",
              pathDestination: "string",
            },
            {
              name: "string",
              pathDestination: "string",
            },
            {
              name: "string",
              pathDestination: "string",
            },
          ]}
        />
        <Dropdown
          buttonName={"Shop"}
          dropDownList={[
            {
              name: "string",
              pathDestination: "string",
            },
            {
              name: "string",
              pathDestination: "string",
            },
            {
              name: "string",
              pathDestination: "string",
            },
          ]}
        />
        <Dropdown
          buttonName={"Product"}
          dropDownList={[
            {
              name: "string",
              pathDestination: "string",
            },
            {
              name: "string",
              pathDestination: "string",
            },
            {
              name: "string",
              pathDestination: "string",
            },
          ]}
        />
      </div>
      <div className={`${styles.Navbar__dx}`}>
        <NavButton icon={<IoSearchOutline />} />
        <NavButton icon={<IoPersonOutline />} />
        <NavButton icon={<IoBagHandleOutline />} />
      </div>
    </div>
  );
};

export default Navbar;
