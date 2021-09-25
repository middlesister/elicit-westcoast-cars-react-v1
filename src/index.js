// 1. Importera React och ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

if(module.hot) {
    module.hot.accept();
}
// 2. Skapa en React komponent
const App = () => {
    return <div style={{ fontWeight: 'bold', color: 'red' }}>Hello from React!!</div> // JSX
}

// 3. Visa komponenten i webbläsaren
// första argumentet är komponenten, andra är placeringen i DOM
ReactDOM.render(<App/>, document.querySelector('#root'));