import { IoArrowForward, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import styles from "./Input.module.scss";
import { useRef, useState } from "react";

interface ComponentProps {
  type: "outline" | "underline",
  inputType?: "text" | "password" | "email" | "number";
  placeholder?: string,
  required?: boolean,
  isDisabled?: boolean,
  error?: string,
  onClick?: () => void,
  setInput: (input: string) => void,
  icon?: JSX.Element, //any perchè considera il componente come non chiamabile tramite funzione, funziona anche senza ma da un error;
}

const Input: React.FC<ComponentProps> = ({
  type = "outline",
  inputType = "text",
  isDisabled = false,
  placeholder = inputType,
  required = false,
  error,
  icon,
  setInput,
  onClick,
}) => {
  // VARIABLES ----------------------
  const inputRef = useRef<HTMLInputElement>(null);
  const [show, setShow] = useState<boolean>(false);
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  const handleToggle = () => {
    setShow(!show);
  }
  // RETURN -------------------------
  return (
    <div>
      <div
        className={`
        ${styles.InputContainer}
      `}
      >
        <div className={`
        ${styles.InputIcon}
      `}>
          {icon}
        </div>
        <input
          ref={inputRef}
          placeholder={placeholder}
          type={show ? "text" : inputType}
          required={required}
          name={inputType}
          className={`
          ${styles.Input}
          ${styles[type]}
          ${error ? styles["error"] : ""}
          ${!onClick && inputType !== "password" ? styles["clear"] : ""}
          ${icon !== undefined ? styles["icon"] : ""}
        `}
          disabled={isDisabled}
          onChange={(e) => { setInput(e.currentTarget.value) }}
        />
        {onClick ?
          <button
            onClick={() => {
              onClick();
            }}
            className={`
              ${styles.InputSubmit}
             `}
            disabled={isDisabled}
            type="button"
          >
            {inputType === "password" ?
              show ?
                <IoEyeOffOutline size={18} />
                :
                <IoEyeOutline size={18} />

              :
              <IoArrowForward size={18} />
            }
          </button>
          : null
        }
        {
          inputType === "password" ?
            <button
              onClick={() => {
                handleToggle()
              }}
              className={`
        ${styles.InputSubmit}
      `}
              disabled={isDisabled}
              type="button"
            >
              {
                show ?
                  <IoEyeOffOutline size={18} />
                  :
                  <IoEyeOutline size={18} />
              }
            </button>
            : null
        }

      </div>
      {error ?
        <span className={`
        ${styles.InputError}
      `}>
          {error}
        </span>
        : null}
    </div>
  );
}

export default Input;