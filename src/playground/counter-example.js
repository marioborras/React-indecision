let count = 0

const addOne = () => {
    console.log("addOne!")
    count++
    renderCounterApp()
}
const minusOne = () => {
    count--
    console.log("minus one!")
    renderCounterApp()
}

const reset = () => {
    count = 0
    console.log("reset")
    renderCounterApp()
}

const appRoot = document.querySelector("#app")

const renderCounterApp= () => {
    const templateTwo = (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
        </div>
    )
    ReactDOM.render(templateTwo,appRoot)
}

renderCounterApp()