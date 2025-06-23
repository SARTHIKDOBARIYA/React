import React from "react";
import ReactDOM from "react-dom/client"

// React Element 

// create using core React
// const heading=React.createElement("h1",{id:"heading"},"Namaste Javascript")

// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

//JSX (transpiled before it Reach JS )

// create using JSX
// const jsxHeading= <h1>Namste React</h1>

// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(jsxHeading)






// JSX

// React Element


// React Component

// class Based Component - Old Way
// Functional Component - New Way

// React Function Component -> a Function is return JSX

const Heading=()=>(
    <h1 className="head" tabIndex="5">
        Namaste ReactJS
    </h1>
)

const HeadingComponent= () =>(
    <div>
        <Heading />
        <h1>Namaste React Functional Component</h1>
    </div>
)

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent />)