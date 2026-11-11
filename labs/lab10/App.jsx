/*
Define the App component for top-level ReactDOM stuff
*/

import { UseState } from "react";
import Student from "./Student.jsx"
// import the functional + class components to render, within App, Student LoginClass LoginFunction

function App() {
    const [showStudent, setShowStudent] = useState(true)
    return(
        <section>
            <h1>LabEx8 - Wk10 - React Lifecycle</h1>
            <button onClick={() => setShowStudent(!showStudent)}>
                {showStudent ? 'Hide' : 'Show'} Student
            </button>
            { showStudent && <Student studentNumber={101523487} /> }
        </section>
    )
}

export default App;