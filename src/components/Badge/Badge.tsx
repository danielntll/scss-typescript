import { cFontSize } from "../../scss/constants/cFontSizes";
import { tColor } from "../../types/tColor";
import { tShape } from "../../types/tShape";
import styles from "./Badge.module.scss";
import { IoClose } from "react-icons/io5";

interface ComponentProps {
  size: "lg" | "md" | "sm",
  text: string,
  shape: tShape,
  isIcon?: boolean,
  isRound?: boolean,
  icon?: (iconSize: number | string) => JSX.Element, //any perchè considera il componente come non chiamabile tramite funzione, funziona anche senza ma da un error;
  direction?: "left" | "right",
  color?: tColor,
  type?: "fill" | "outline",
  onClick: () => void,
}

const Badge: React.FC<ComponentProps> = ({
  size = "lg",
  text = "Button",
  shape = "default",
  isIcon = false,
  isRound = false,
  icon = (iconSize: number | string) => { return <IoClose size={iconSize} /> },
  direction = "right",
  color = "primary",
  type = "fill",
  onClick = () => { console.log("Click") },
}) => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  // RETURN -------------------------
  return (
    <div
      onClick={onClick}
      className={`
      ${styles.Badge} 
      ${styles[size]}
      ${styles[isRound ? "round" : shape]}
      ${styles[direction]}
      ${isRound ? styles["isRound"] : styles["isNotRound"]}
      ${styles[type + "_" + color]}
    `}>
      {isIcon ?
        icon(cFontSize[size])
        : null
      }
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

export default Badge;