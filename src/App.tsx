import "./App.scss";
import Button from "./components/Button";


function App() {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  // RETURN -------------------------
  return (
    <div className="App">
      <div className="App__container">
        <div className="App__section">
          <div className="col-3">
            <Button size={"xs"} text={"Button"} shape={"round"} />
          </div>
          <div className="col-3">
            <Button size={"sm"} text={"Button"} shape={"round"} />
          </div>
          <div className="col-3">
            <Button size={"md"} text={"Button"} shape={"round"} />
          </div>
          <div className="col-3">
            <Button size={"lg"} text={"Button"} shape={"round"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
