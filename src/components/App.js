import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
                <ol key="relativeList">
                    <li key="relativeListItem1">Kakammaa Gowda</li>
                    <li key="relativeListItem1">Anusha Gowda</li>
                    <li></li>
                </ol>
            </div>
        )
    }
}


export default App;
