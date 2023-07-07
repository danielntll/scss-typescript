import * as React from "react";
import styles from "./Dropdown.module.scss";
import { IoChevronDownSharp } from "react-icons/io5";

type DropdownList = {
  name: string;
  pathDestination: string;
};

interface ComponentProps {
  buttonName: string;
  dropDownList: DropdownList[];
}

const Dropdown: React.FC<ComponentProps> = ({
  buttonName = "Button",
  dropDownList,
}) => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  // RETURN -------------------------
  return (
    <div className={`${styles.dropdown}`}>
      <div className={`${styles.dropbtn}`}>
        <p>{buttonName}</p>
        <IoChevronDownSharp />
      </div>
      <div className={`${styles.dropdown_content}`}>
        {dropDownList?.map((list: DropdownList, index: number) => {
          return (
            <a
              key={index + "dropdown" + buttonName}
              href={list.pathDestination}
            >
              {list.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
