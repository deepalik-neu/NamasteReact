import React from "react"
import  ReactDOM from "react-dom/client";

//using react
//const heading = React.createElement("h1",{},"Namaste React");
//both are objects
//console.log(heading);

//using JSX
const jsxHeading = <h1 id="heading"> Namaste React using JSX</h1>

//console.log(jsxHeading);
const element = <span>Element</span>
const Title = (
    <h1 className="head" tabIndex="5">
        {element}
        Namaste React using JSX!
    </h1>
)
const Title1 =()=> (
    <h1 className="head" tabIndex="5">
        {element}
        Namaste React using JSX!
    </h1>
)

const HeadingComponent = ()=>(
    <div id="container">
        {/* all is JSX */}
        <Title1/>
        <Title1></Title1>
        {Title}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);