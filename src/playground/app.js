class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleOptions = this.handleDeleOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem("options")
            const options = JSON.parse(json)

            if (options){
                this.setState(()=> ({options}))
            }
        } catch (e) {
            //do nothing at all
        }

        
        
        
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem("options",json)
        }
    }
    handleDeleOptions() {
        this.setState(()=> ({options: []}))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option)=>  optionToRemove !== option)
        }))
    }
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }
    handleAddOption(option) {
        if(!option){
            return "Enter Valid value to add item"
        }else if (this.state.options.indexOf(option) > -1){
            return "This option already exists"
        }

        this.setState((prevState)=>  ({options: prevState.options.concat(option)}))
    }
    render() {
        const subtitle = "Put your life in the hands of a computer!"
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick = {this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleOptions={this.handleDeleOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}
Header.defaultProps = {
    title: "Indecision"
}
const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
             What Should I do?
            </button>
        </div>
    )
}
//old version
// class Action extends React.Component {
//     render(){
//         return (
//             <div>
//                 <button onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}
//                 >
//                 What Should I do?
//                 </button>
//             </div>
//         )
//     }
// }
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please Add an option to get started</p>}
            { 
                props.options.map((option)=> (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption = {props.handleDeleteOption}
                    />
                ))
            }
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
              onClick ={(e) => {
                props.handleDeleteOption(props.optionText)
               }}
            >
                Remove
            </button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props){
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        //es6 short hand returning an object with key/value pair that is the same
        this.setState(()=>  ({ error}))

        if (!error) {
            e.target.elements.option.value = ''
        }
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
               <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Submit</button>
               </form>
            </div>
        )
    }
}
//sample Stateless functional component
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }

ReactDOM.render(<IndecisionApp />,document.querySelector("#app"))