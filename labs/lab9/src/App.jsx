/* 
Here we will define the top-level application for react
*/

import College from "./components/College"
import Student from "./components/Student"
//import Employee from "./components/Employee"

const title = "React using Vite"
const titleStyle = {color: "teal"}
const courses = ["JavaScript", "React", "Node.js"]

function App() {    
    // This component returns one root element but contains three
    // child components that instantiate College, Student & Employee
   return (
    <article>
        <h1 style={titleStyle}>{title}</h1>
        <ul>
            {courses.map((course) => (
                <li key={course}>{course}</li>
            ))}
        </ul>

        <College name="GBP" city="Toronto" />
        <Student firstname="Colin" lastname="Porter" />
        {/* <Employee employee="" /> */}
    </article>
   ) 
}
export default App