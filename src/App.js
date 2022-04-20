import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
    const [form, setform] = useState(false)
    const changlehandler = () => {
        setform((prev) => !prev)
    }
    const formsubmit = () => {
        setform(false);
    }
    return (
        <div className="App">
            <button className="toggleForm" onClick={changlehandler}>
                {/* Show text Add House or Show Rentals based on state */}
                {form ? "Show Rentals" : "Add House"}
            </button>
            {/* Show component based on state */}
            {!form && <Rentals />}
            {form && <AddHouse submit={formsubmit} />}
            <br />
        </div>
    );
}

export default App;


