import React from 'react'
// import Electronics from '../images/Electronics'; 
function Slidders()
{
    return (
        <>
       {/* <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src='https://cdn.discordapp.com/attachments/1026106652325335085/1146717079379120158/IMG-20230831-WA0000.jpg' alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src='https://cdn.discordapp.com/attachments/1026106652325335085/1146750379590164490/IMG-20230831-WA0015.jpg' class="d-block" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src='https://cdn.discordapp.com/attachments/1026106652325335085/1146717079379120158/IMG-20230831-WA0000.jpg' class="d-block" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>             */}
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src='https://cdn.discordapp.com/attachments/1026106652325335085/1146717079379120158/IMG-20230831-WA0000.jpg' class="d-block" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src='https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg' class="d-block" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img style = {{height:"800px" , width:"800px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjRq-V1l8h9JJtFSMGSjDcDMtjklrmryn6pCniW1xmxw&s" class="d-block" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}
export default Slidders;
// src='https://cdn.discordapp.com/attachments/1026106652325335085/1146717079379120158/IMG-20230831-WA0000.jpg'