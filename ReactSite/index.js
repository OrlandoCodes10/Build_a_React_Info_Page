import React from "react"
import ReactDOM from "react-dom/client"

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

// OLD - ReactDOM.render(navbar, document.getElementById("root"))
// NEW (one line) ReactDOM.createRoot(document.getElementByID("root")).render(navbar)

