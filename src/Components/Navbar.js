import React from 'react';

function Navbar(){
  return(
    <div>
      <nav className='navbar'>
        <div className="menu">

          <h1 className="title">Hello</h1>

          <div className="items">
            <li><a href="#">Home</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About</a></li>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Navbar;