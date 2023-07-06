import { tColor } from "../../types/tColor";
import { tSizeShort } from "../../types/tSize";
import styles from "./Checkbox.module.scss";

type CheckboxType = "fill" | "outline";


interface ComponentProps {
  setActive: (value: boolean) => void,
  isActive: boolean,
  type?: CheckboxType,
  color?: tColor,
  disabled?: boolean,
  size?: tSizeShort,
}

const Checkbox: React.FC<ComponentProps> = ({
  setActive,
  isActive = false,
  type = "fill",
  color = "primary",
  disabled = false,
  size = "md",
}) => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  const handleToggle = () => {
    setActive(!isActive);
  }
  // RETURN -------------------------
  return (
    <label className={`
      ${styles.container}
      ${styles[type]}  
      ${styles[size]}
      ${styles[color]}  
    `}>
      <input
        type="checkbox"
        checked={disabled ? false : isActive}
        onChange={handleToggle}
        disabled={disabled}
      />
      <span className={`
        ${styles.checkmark}
        ${styles[color]}
        ${styles[type]}

      `}></span>
    </label>
  );
}

export default Checkbox;