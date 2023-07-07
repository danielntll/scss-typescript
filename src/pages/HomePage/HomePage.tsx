import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./HomePage.module.scss";

interface PAGE_PROPS {}

const HomePage: React.FC<PAGE_PROPS> = ({}) => {
  // VARIABLES ----------------------
  const navigate = useNavigate();
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------

  // RETURN -------------------------
  return (
    <div className="HomePage">
      <Navbar />
      {/* TODO: creare div sezione */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button
        size={"md"}
        text="Components Page"
        shape={"round"}
        onClick={() => navigate("/components")}
      />
    </div>
  );
};

export default HomePage;
