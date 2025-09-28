import React from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
    const nav1=useNavigate();
    function clickHandler() {
        nav1("/support");
    }
    function backHandler() {
        nav1(-1);
    }
    return (
        <div>
        <div>
            This is About Page
        </div>
        <button onClick={clickHandler}>Move to Support Page</button>
        <button onClick={backHandler}>Go Back</button>
        </div>
    )
}

export default About