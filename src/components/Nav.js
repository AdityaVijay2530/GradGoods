
import React from 'react'

function Nav(){
    return (
        <>
          <nav style={{height:"70px" , backgroundColor:"#1D3C6D" }} className="navbar navbar-expand-lg" >
  <div className="container-fluid" >
    <a className="navbar-brand" style={{color:"#00FFCA"}} href="#">Grad_Goods</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form className="d-flex">
        <input className="form-control me-2" style={{marginLeft:'350px',width:'600px',borderRadius:'50px'}} type="search" placeholder="what are you looking for...." aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul style={{marginLeft:'2rem'}} className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" style={{color:"#C8F0FF" , paddingRight:"12px"}} aria-current="page" href="#">What's New</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  style={{color:"#C8F0FF",marginLeft:"2rem"}} href="#">Account</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link "  style={{color:"#C8F0FF",marginLeft:"2rem"}} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Wishlist
          </a>
          
        </li>
        <li className="nav-item">
          <a className="nav-link "  style={{color:"#C8F0FF",marginLeft:"2rem"}} href="#" tabIndex="-1" aria-disabled="true">Add to Bag</a>
        </li>
      </ul>
      
      
      
    </div>
    
  </div>
</nav>



        </>
    )
}

export default Nav;