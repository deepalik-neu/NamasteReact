import React from "react"
import  ReactDOM from "react-dom/client";
const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"I am h1 tag"),
    React.createElement("h2",{},"I am h2 tag!")])
);

const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Hello World from react!"
);
//first we neeed to tell react add this to DOM and it is done through ReactDom
const root = ReactDOM.createRoot(document.getElementById("root"));

//what is heading? it is just a JS object. it will return an object
root.render(parent);
//job of render: to take this object and put this into what is understood by document.
// responsible to convert it to h1 tag and put it forward.

//ReactElement(Object) => html(browser understandable)