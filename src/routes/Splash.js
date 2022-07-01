import React from "react"
import Navigation from "../components/Navigation"
import Add from '../components/Add'
import CssModuleWebpack from '../components/CssModuleTest';


function Splash(){
    return (
        <div>
            <Navigation />
            <p>This is the splash page</p>
            <Add />
            <CssModuleWebpack />
        </div>
    )
}

export default Splash; 