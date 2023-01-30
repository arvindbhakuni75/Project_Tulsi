

import Navbar from "./elements/Navbar";

import './About404.css';

export default function About () {
    return(
        <>
        <div className="container">
        <Navbar />
        
        <div className="errorBox">
            <h1>404 !</h1>
            <h1>This Page is currently in Development phase. ! </h1>
        </div>
        </div>
        </>
    );
}