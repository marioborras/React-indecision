class Toggle extends React.Component {
    constructor(props){
        super(props)
        this.toggleVisibility = this.toggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }

    toggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
        console.log(this.state.visibility)
    }
    render(){
        return(
            <div>
                <h1>Visbility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.visibility ? "Hide Details":"Show Details"}</button>
                {this.state.visibility && <p>Hey Therese are some details you can now see</p>}
            </div>
            
        )
        
    }
}

ReactDOM.render(<Toggle/>, document.querySelector("#app"))
