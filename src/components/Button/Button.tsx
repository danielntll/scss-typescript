import { cFontSize } from "../../scss/constants/cFontSizes";
import { tColor } from "../../types/tColor";
import { tShape } from "../../types/tShape";
import { tSize } from "../../types/tSize";
import styles from "./Button.module.scss";
import { IoChevronForward } from "react-icons/io5";

type ButtonTypes = "fill" | "outline" | "underline" | "text";

interface ComponentProps {
  size: tSize,
  text: string,
  shape: tShape,
  icon?: (() => JSX.Element) | JSX.Element | JSX.Element[] | any, //any perchè considera il componente come non chiamabile tramite funzione, funziona anche senza ma da un error;
  direction?: "left" | "right",
  color?: tColor,
  type?: ButtonTypes,
}

const Button: React.FC<ComponentProps> = (
  {
    size = "xl",
    text = "Button",
    shape = "round",
    icon = (size: number | string) => <IoChevronForward size={size} />,
    direction = "left",
    color = "primary",
    type = "fill",
  }
) => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  // RETURN -------------------------
  return (
    <div
      className={`
        ${styles.Button} 
        ${styles[size]}
        ${styles[type !== "underline" ? shape : "square"]}
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
    </div>
  );
}

export default Button;