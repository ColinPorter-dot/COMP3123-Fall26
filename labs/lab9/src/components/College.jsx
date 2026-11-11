/*
College will be a functional component defined using a prototype constructor
Props: name, city
*/

// Extracting the destructured name and city from the param list is 
// equivalent to having "function College(props){const name = props.name}"
function College({ name, city }) {
    // in functional components, we don't need to use render() within College
    // we can just return and it returns from redner() automatically
    return (
        <h2>
            {name} : {city}
        </h2>
    )
}
export default College