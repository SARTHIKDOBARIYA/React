/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>H1 Tag</h1>
 *      </div>
 * </div>
 */

// const parent=React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement("h1",{},"H1 Tag")  
//     )
// )


/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>H1 Tag</h1>
 *          <h2>H2 Tag</h2>
 *      </div>
 * </div>
 */

// const parent=React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child1"},
//         [ 
//             React.createElement("h1",{},"H1 Tag") , 
//             React.createElement("h2",{},"H2 Tag")
//         ] 
//     ) 
// )


/**
 * 
 * <div id="parent">
 *      <div id="child1">
 *          <h1>H1 Tag</h1>
 *          <h2>H2 Tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>H1 Tag</h1>
 *          <h2>H2 Tag</h2>
 *      </div>
 * </div>
 */
const parent=React.createElement(
    "div",
    {id:"parent"},
    [ React.createElement(
        "div",
        {id:"child1"},
        [ 
            React.createElement("h1",{},"H1 Tag") , 
            React.createElement("h2",{},"H2 Tag")
        ] 
    ) , 
    React.createElement(
        "div",
        {id:"child2"},
        [ 
            React.createElement("h1",{},"H1 Tag") , 
            React.createElement("h2",{},"H2 Tag")
        ] 
    ) ]
)


// return Object => HTML(Browser Understands)
console.log('=== heading ===>', parent);

/** 
* <div id="parent">
*      <div id="child1">
*          <h1>H1 Tag</h1>
*          <h2>H2 Tag</h2>
*      </div>
*      <div id="child2">
*          <h1>H1 Tag</h1>
*          <h2>H2 Tag</h2>
*      </div>
* </div>
*/



const root=ReactDOM.createRoot(document.getElementById("root"))

// convert object into h1 tag
root.render(parent)