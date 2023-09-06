import React from 'react'
import  './Poster.css';

function Posters() {
    return (
        <>
            <br />
            <br />
            <br />
            <body>
                <div class="image-grid">
                    <img style={{ width:"876px" , borderRadius:"10px" , height:"904px" , marginLeft:"5rem" }} class="image-grid-col-2 image-grid-row-2" src="https://cdn.discordapp.com/attachments/1026106652325335085/1147094099057446983/Screenshot_2023-09-01-14-31-51-25_99c04817c0de5652397fc8b56c3b3817.jpg" alt="architecture" />
                    <img style = {{ width:"787px", height:"409px", borderRadius:"10px" }} src="https://cdn.discordapp.com/attachments/1026106652325335085/1147106988707287090/IMG-20230901-WA0004.jpg" alt="architecture" />
                     <div style={{marginRight:"-30vh"}}>
                    <img  style = {{marginTop:"30rem",width:"376px", height:"449px", borderRadius:"10px", float:"left" }}src="https://cdn.discordapp.com/attachments/1026106652325335085/1147094098549932064/Screenshot_2023-09-01-14-32-11-34_99c04817c0de5652397fc8b56c3b3817.jpg" alt="architecture" />
                    </div>
                    <img style = {{ width:"686px", height:"449px",marginTop:"9rem" , marginLeft:"2rem", borderRadius:"10px"}} src="https://cdn.discordapp.com/attachments/1026106652325335085/1147094098759663696/Screenshot_2023-09-01-14-32-01-10_99c04817c0de5652397fc8b56c3b3817.jpg" />
                </div>
            </body>
        </>
    )
}
export default Posters;