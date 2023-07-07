import * as React from "react";
import { tColor } from "../../types/tColor";
import { tSizeShort } from "../../types/tSize";
import styles from "./Radio.module.scss";

interface ComponentProps {
  isActive: boolean;
  setActive: (val: boolean) => void;
  name: string;
  value: string;
  color?: tColor;
  disabled?: boolean;
  size?: tSizeShort;
}

const Radio: React.FC<ComponentProps> = ({
  isActive = true,
  setActive,
  name,
  value,
  color = "danger",
  disabled = false,
  size = "md",
}) => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  const handleToggle = () => {
    setActive(!isActive);
  };
  // RETURN -------------------------
  return (
    <label
      className={`
        ${styles.container}
        ${styles[color]}  
        ${styles[size]}  
      `}
    >
      <input
        type="radio"
        onChange={handleToggle}
        checked={disabled ? false : isActive}
        name={name}
        value={value}
        disabled={disabled}
      />
      <span
        className={`
        ${styles.checkmark}
        ${styles[color]}
      
      `}
      ></span>
    </label>
  );
};

export default Radio;
