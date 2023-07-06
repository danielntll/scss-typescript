import { cFontSize } from "../../scss/constants/cFontSizes";
import { tColor } from "../../types/tColor";
import { tShape } from "../../types/tShape";
import { tSize } from "../../types/tSize";
import styles from "./Button.module.scss";
import { IoChevronForward } from "react-icons/io5";

type ButtonTypes = "fill" | "outline" | "underline" | "text";

interface ComponentProps {
  size: tSize,
  text?: string,
  shape: tShape,
  submit?: boolean,
  icon?: (iconSize: number | string) => JSX.Element, //any perchè considera il componente come non chiamabile tramite funzione, funziona anche senza ma da un error;
  direction?: "left" | "right",
  color?: tColor,
  type?: ButtonTypes,
  onClick: () => void,
}

const Button: React.FC<ComponentProps> = (
  {
    size = "xl",
    text = "",
    shape = "default",
    submit = false,
    icon = (iconSize: number | string) => { return <IoChevronForward size={iconSize} /> },
    direction = "right",
    color = "primary",
    type = "fill",
    onClick = () => { console.log("Click") },
  }
) => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  // RETURN -------------------------
  return (
    <button
      onClick={onClick}
      type={submit ? "submit" : "button"}
      className={`
        ${styles.Button} 
        ${styles[size]}
        ${styles[type !== "underline" && type !== "text" ? shape : "square"]}
        ${styles[direction]}
        ${styles[type + "_" + color]}
      `}>
      {icon(cFontSize[size])}
      {text ?
        <span className={styles.text}>
          {text}
        </span>
        :
        null
      }
    </button>
  );
}

export default Button;