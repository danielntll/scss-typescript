import styles from "./DefaultComponent.module.scss";

interface ComponentProps {

}

const DefaultComponent: React.FC<ComponentProps> = ({ }) => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  // RETURN -------------------------
  return (
    <div className={`${styles.DefaultComponent}`}>

    </div>
  );
}

export default DefaultComponent;