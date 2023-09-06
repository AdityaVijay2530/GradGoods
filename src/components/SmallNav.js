import React from 'react'

function SmallNav(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#C8F0FF", height:"35px",border:'0px,0px,0px,1px'}}>
  <div  class="container-fluid">
    <a class="navbar-link dropdown-toggle" href="#">All CATAGORIES</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" style={{marginLeft:"40px" , fontSize:"18px"}} aria-current="page" href="#">USED TEXTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" style={{marginLeft:"40px" , fontSize:"18px"}} href="#">FASHION FINDS</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link active" style={{marginLeft:"40px", fontSize:"18px"}} href="#">TECH TREASURES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active " style={{marginLeft:"40px" , fontSize:"18px"}} href="#" tabindex="-1" aria-disabled="true">DORM DECOR</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active " style={{marginLeft:"40px" , fontSize:"18px"}} href="#">PROJECTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" style={{marginLeft:"40px" , fontSize:"18px"}} href="#">FITNESS FINDS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" style={{marginLeft:"40px" , fontSize:"18px"}} href="#">HOME ESSENTIALS</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        </>
    )
}
export default SmallNav;