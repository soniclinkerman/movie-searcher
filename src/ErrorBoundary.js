import React, { Component } from "react";

class ErrorBoundary extends Component{
    constructor(){
    super();
    this.state = {
        hasError: false
    }
}

componentDidCatch(){
    this.setState({hasError: true})
}

render(){
    if (this.state.hasError){
        return (
            <div>
                 <h1>Oops. Something happened :( </h1>
                 <p>Please come back later</p>
            </div>
        )
    }
    return this.props.children
        
}
}

export default ErrorBoundary