// 1. Importera React och ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// 2. Skapa en React komponent
const App = () => {
    return <div>Hello from React</div> // JSX
}

// 3. Visa komponenten i webbläsaren
// första argumentet är komponenten, andra är placeringen i DOM
ReactDOM.render(<App/>, document.querySelector('#root'));