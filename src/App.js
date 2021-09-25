// 1. Importera React ...
import React from 'react';

// 2. Skapa komponenten
const App = () => {
    return (
        <section>
            <div style={{ fontWeight: 'bold', color: 'red' }}>Hello from React!!</div>
            <div>
                <label htmlFor="firstName">Name:</label>
                <input type="text" id="firstName" />
            </div>

        </section>
    ); // JSX
}

// 3. Exportera 
export default App