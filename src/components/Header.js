import React from "react";

function Header(){
    const firstname = "Koray"
    const lastname = "Güney"
    const date = new Date()
    let timeOfday
    const styles = {
        fontSize: 30
    }

    if(date.getHours() < 12){
        timeOfday = "Morning"
        styles.color = "#46c8bd"
    } else if(date.getHours() >= 12 & date.getHours() < 18){
        timeOfday = "Afternoon"
        styles.color = "#80cf5c"
    } else {
        timeOfday = "Evening"
        styles.color = "#841e8c"
    }

    return (
        <header>
            <div className="overlay">
                <h1>Hello {firstname + " " + lastname}</h1>
                <h3 style={styles}>Good {timeOfday} ! It is  {date.getHours()} o'clock</h3>
                <h3>Reasons for Choosing US</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam
                    debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam
                    consequatur ab.</p>
                <br/>
                    <button>READ MORE</button>
            </div>
        </header>
    )
}

export default Header