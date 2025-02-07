/* eslint-disable @next/next/no-img-element */

'use client'

import { useState } from "react";
import About from "./about";
import Contact from "./contact";
//import Main from "./main";
import Services from "./services";
import * as React from 'react';
import Footer from "./footer";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Home() {

  const [nav, setNav] = useState("0");


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (event: any) => {
    setNav(event.target.id)
  }

 

  return (
    <>    <div className="w-100 vh-100 bg-white" >
      <main>
        <div className="container mt-3">
        <nav className={`navba-nav  navbar-expand-lg ${nav !== '0' ? "border-bottom":""}`} role="navigation" >
          <div className="navbarTabs">
            <img src="/logo3.png" width="150px" alt="logo"/>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a id={'0'} className="nav-link" href="#home" onClick={handleClick}>Home</a>
              </li>
              <li className="nav-item">
                <a id={'1'}className="nav-link" href="#about" onClick={handleClick}>About us</a>
              </li>
              <li className="nav-item">
                <a id={'2'} className="nav-link " href="#services" onClick={handleClick}>Services</a>
              </li>
              <li className="nav-item nav-pills">
                <a id={'3'} className="nav-link" href='#contact' style={{backgroundColor:'#5C7285', color: 'white'}} onClick={handleClick}>Contact</a>
              </li>
            </ul>
            </div>
        </nav>
        </div>
        
        <div className="w-100 bg-white">

          {nav === "0" && (
            <>
            <div className="background-div">
              <h2 className="h2 text" style={{background: '#E2E0C8'}}>Now Booking: Spring & Summer 2025!</h2>
            </div>

            <div className="container mt-3">
               <p className="fs-2">Secure your spot for the 2025 season!</p>
               <p className="fs-4" >Offering weekly, biweekly, and monthly lawn care, plus one-time spring cleanups, gardening, and plantings. <br></br>Maintenance plans run May–October, with spring and fall cleanups included.</p>
            </div>

            <div className="container mt-5 mb-5">
              <h2 className="display-3 mb-5">Explore our Projects </h2>
              <div className="row row-cols-1 row-cols-md-2 g-4 clearfix mb-5" style={{borderTop: '1px solid #818C78'}}>
                <div className="col">
                  <div className="card border-white">
                    <img src="/pic2.png" className="card-img-top rounded" alt="..."/>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-white">
                    <img src="/pic3.png" className="card-img-top rounded" alt="..."/>
                   
                  </div>
                </div>
                
                <div className="col">
                  <div className="card border-white">
                    <img src="/pic4.png" className="card-img-top rounded" alt="..."/>
                    
                  </div>
                </div>
                <div className="col">
                  <div className="card border-white">
                    <img src="/pic1.png" className="card-img-top rounded" alt="..."/>
                    
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src="/pic5.png " className="card-img-top" alt="..." width="600px" height="400"/>
                    
                  </div>
                </div>
              </div>
            </div>
            </>
          )}

          { nav === "1" && (
            <About/> 
          ) }

          { nav === "2" && (
            <Services/> 
          ) }

          { nav === "3" && (

            <Contact/>
          )}
        </div>
 
      </main>
        <Footer handleNavClick={handleClick}/>
    </div>
    </>

      
   
  );
}
