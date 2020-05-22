import React, {Component} from "react";
import MovieSearch from "../components/MovieSearch/MovieSearch";
import ErrorBoundary from "../ErrorBoundary";

class Main extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div className="container">
                <h1 className="title">Movie Search</h1>
                <p className="subtitle">Your movie is just a search away</p>

                <ErrorBoundary> 
                    <MovieSearch/>
                </ErrorBoundary>
                <footer>
                    © Zay Altick 2020
                </footer>
                
            </div>

        )
    }
}

export default Main