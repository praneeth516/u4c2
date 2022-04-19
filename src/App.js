import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
    const [form, setform] = useState(false)

    const changehandler = () => {
        setform((prev) => !prev)
    }
    return (
        <div className="App">
            <button className="toggleForm" onClick={changehandler}>
                {/* Show text Add House or Show Rentals based on state */}
                {form ? "Show Rentals" : "Add House"}
            </button>
            {/* Show component> based on state */}
            {form && <AddHouse />}
            {!form && <Rentals />}

        </div>
    );
}

export default App;
