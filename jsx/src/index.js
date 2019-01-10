// Import React and ReactDom libs
import React from 'react';
import ReactDOM from 'react-dom';

// Create the components
const App = () => {
    const lebalText = 'Enter name:';
    const buttonText = 'Submit';
    
    return (
        <div>
            <lebal className="lebal" htmlFor="name">
                {lebalText}
            </lebal>
            <input id="name" type="text"/>
            <button style={{backgroundColor:'blue', color:'white'}}>
                {buttonText}
            </button>
        </div>
    )
};

// Show them
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
