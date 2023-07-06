import { tColor } from "../../types/tColor";
import { tSizeShort } from "../../types/tSize";
import styles from "./Toggle.module.scss";

import { ChangeEvent, useState } from 'react';



interface ComponentProps {
  size: tSizeShort,
  color?: tColor,
  setActive: (active: boolean) => void,
  isActive: boolean,
  disabled?: boolean,
}

const Toggle: React.FC<ComponentProps> = (
  {
    size = "lg",
    color = "success",
    setActive,
    isActive,
    disabled = false,
  }) => {
  // VARIABLES ---------------------- 
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  const handleToggle = () => {
    setActive(!isActive)
  }
  // RETURN -------------------------
  return (

    <label className={`
        ${styles.switch}
        ${styles[size]}
      `}>
      <input
        className={`
          ${styles.input}
        `}
        type="checkbox"
        checked={disabled ? false : isActive}
        onChange={() => handleToggle()}
        disabled={disabled}
      />
      <span className={`
          ${styles.slider}
          ${styles.round}
          ${styles[color]}
        `}></span>
    </label>

  );
}

export default Toggle;