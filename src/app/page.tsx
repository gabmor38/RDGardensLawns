
'use client'

import About from "./about";
import Contact from "./contact";
import Main from "./main";
import Services from "./services";
import * as React from 'react';


const handleClick = () => {

}

export default function Home() {
  return (
    <div className="container-fluid" >
      <main>
        <div className="container mt-3">
        <nav className="navba-nav  navbar-expand-lg" role="navigation" >
          <div className="navbarTabs">
            <h2 className="compName">Richard D Softscape Landscaping</h2>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About us</a>
              </li>
              <li className="nav-item">
              {/* <Link className="nav-link" href="/services">Services</Link> */}
                <a className="nav-link " href="#services">Services</a>
              </li>
              <li className="nav-item nav-pills">
                <a className="nav-link" style={{backgroundColor:'#025416', color: 'white'}}>Contact</a>
              </li>
            </ul>
            </div>
        </nav>
        </div>
        <div className="background-div">
            
        </div>
        <div  className="container-lg mt-4">
          <Services/>
        </div>
        <div className="container-lg mt-4">
          <About/>
        </div>
        <div  className="container-lg mt-4">
          <Contact/>
        </div>
        <footer>
          <nav className="navbar sticky-bottom bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Bottom Footer</a>
            </div>
          </nav>
          
        </footer>


      </main>
    </div>
   
  );
}
