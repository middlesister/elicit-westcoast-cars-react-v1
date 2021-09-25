// 1. Importera React och ReactDOM
import ReactDOM from 'react-dom';

// 2. Skapa en React komponent
import App from './App';

if(module.hot) {
    module.hot.accept();
}


// 3. Visa komponenten i webbläsaren
// första argumentet är komponenten, andra är placeringen i DOM
ReactDOM.render(<App/>, document.querySelector('#root'));