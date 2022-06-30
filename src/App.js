import React from 'react';
import Add from './components/Add'
import CssModuleWebpack from './components/CssModuleTest';


function App(){
    return (<div>
        <p>JSX Transpiled to JS Code <code>src/App.js</code></p>
        <Add />
        <CssModuleWebpack />
        </div>)
}

export default App; 