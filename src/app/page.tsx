
import Services from "./services";
import * as React from 'react';
import Image from 'next/image'




export default function Home() {

  return (
    <div >
      <main>
        <div className="container">
        <nav className="navba-nav  navbar-expand-lg" role="navigation" >
          <div className="navbarTabs">
            <h2 style={{paddingRight: '100px'}}>Richard D Softscape Landscaping</h2>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item nav-pills">
                <a className="nav-link">Contact</a>
              </li>
            </ul>
            </div>
        </nav>
        </div>
        <div className="background-div">
            <h2></h2>
        </div>
       
        <div>
          <Services/>
        </div>


      </main>
    </div>
   
  );
}
