import React from "react"

function MainContent() {
    const firstName = "Rajesh"
    const lastName = "Rao"
    const date = new Date(2019, 5, 9, 22)
    const hour = date.getHours()
    let timeOfDay

    const styles = {
            //color:"#FF8C00", 
            backgroundColor: "#FF2D00",
            fontSize: "30px"
    }

    if (hour < 12) {
        timeOfDay = "morning"
        styles.color = "#04756F"
    } else if (hour >= 12 && hour < 17) {
        timeOfDay = "afternoon"
        styles.color= "#2E0927"
    } else if (hour >= 17 && hour < 21) {
        timeOfDay = "evening"
        styles.color = "#D90000"
    } else if (hour >= 21 && hour < 24) {
        timeOfDay = "night"
        styles.color = "mejanta"
    }

    

    return (
        <div>
            <h1>This is the Main Content.</h1>
            <h2 style={styles}>{"Good " + timeOfDay + " " + firstName + " " + lastName}</h2>
            <h3> It is currently about {date.getHours() % 12 + " O clock"}</h3>
        </div>
    )
}

export default MainContent