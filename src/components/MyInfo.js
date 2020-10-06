import React from "react";
import Header from "./Header";
import MyApp from "./MyApp";

function MyInfo() {
    return (
        <div>
            <Header/>
            <Main />
            <MyApp />
        </div>
    )
}

function Main() {
    return (
        <div className="main" >
            <h1>My name is Koray Güney</h1>
            <p> This is my life summary</p>
            <ul>
                <li>Running</li>
                <li>Football</li>
                <li>Table Tennis</li>
            </ul>
        </div>
    )
}

export default MyInfo