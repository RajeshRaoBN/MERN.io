import React from "react"
import ContactCard from "./ContactCard"

function App() {
    return (
       <div>
           <ContactCard
                contact = {{
                    name:"Mr.Wiskerson",
                    imgUrl:"http://placekitten.com/300/200",
                    phone:"(212) 555-1234",
                    email:"mr.wiskaz@catnap.meow" 
                }}
                
           />
           <ContactCard
                contact = {{
                    name:"Fluffykins",
                    imgUrl:"http://placekitten.com/400/200",
                    phone:"(212) 555-2345",
                    email:"fluff@me.com" 
                }}
           />
           <ContactCard
                contact = {{
                    name:"Mr.Wiskerson",
                    imgUrl:"http://placekitten.com/300/200",
                    phone:"(212) 555-1234",
                    email:"mr.wiskaz@catnap.meow" 
                }}
           />
           <ContactCard
                contact = {{
                    name:"Felix",
                    imgUrl:"http://placekitten.com/200/100",
                    phone:"(212) 555-4567",
                    email:"thecat@hotmail.com" 
                }}
           />
        </div> 
    )
    
}

export default App