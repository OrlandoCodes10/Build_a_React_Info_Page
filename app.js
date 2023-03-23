// ReactDOM.render(<h1>Hello, everyone! My name is Orlando Yes my name is</h1>, document.getElementById("root"))

// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

// console.log(page)

// ReactDOM.render (
//     page,
//     document.getElementById("root")
// )

import React from "react"
import ReactDOM from "react-dom"

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)

// ReactDOM.render(navbar, document.getElementById("root"))

ReactDOM.createRoot(document.getElementById("root")).render(navbar)