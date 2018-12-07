console.log("Playground running!")
let visibility = false 
let secretMessage 
const  toggleVisibility = () => {
    visibility = !visibility
    renderVisbilityApp()
}


const appRoot = document.querySelector("#app")

const renderVisbilityApp = () => {

    let template = (
        <div>
        <h1>Visbility Toggle</h1>
        <button onClick={toggleVisibility}>{visibility ? "Hide Details": "Show Details"}</button>
        {visibility && (
            <p>Hey Therese are some details you can now see</p>
        )}
        </div>
    )
    ReactDOM.render(template, appRoot)
}

renderVisbilityApp()