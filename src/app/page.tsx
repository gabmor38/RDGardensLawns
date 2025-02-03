
'use client'

import { useState } from "react";
import About from "./about";
import Contact from "./contact";
import Main from "./main";
import Services from "./services";
import * as React from 'react';


export default function Home() {

  const [nav, setNav] = useState("");


  const handleClick = (event: any) => {
  console.log(event)
    setNav(event.target.id)
  }

  const categories = [
    {
      name: 'Home',
      href: '#home',
      id: 1,
    },
    {
      name: 'About',
      href: '#about',
      id: 2,
    },
    {
      name: 'Services',
      href: '#services',
      id: 3,
    },
    {
      name: 'Contact',
      href: '#contact',
      id: 4,
    },
  ];


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
                <a id={'2'}className="nav-link" href="#about" onClick={handleClick}>About us</a>
              </li>
              <li className="nav-item">
              {/* <Link className="nav-link" href="/services">Services</Link> */}
                <a id={'3'} className="nav-link " href="#services" onClick={handleClick}>Services</a>
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
          { nav === "2" && (
            <About/> 
          ) }

          { nav === "3" && (
            <Services/> 
          ) }
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
