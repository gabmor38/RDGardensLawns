/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

'use client'

import { useState } from "react";
import About from "./about";
import Contact from "./contact";
import Services from "./services";
import * as React from 'react';
import Footer from "./footer";
 



export default function Home() {

  const [nav, setNav] = useState("0");
  const [formData, setFormData] = useState({
    firstName:"",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
 


  const handleClick = (event: any) => {
    setNav(event.target.id)
  }

  const updateFormData = (field:any, value:any) => {
    setFormData({ ...formData, [field]: value });
  };

  const onSubmitForm = (event: any) => {
    event.preventDefault();

    const mailtoLink = `mailto:gabrielamorenor@gmail.com?subject=Service Request from ${formData.firstName} ${formData.lastName}&body=Message: ${formData.message}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService: ${formData.service}`;
    window.location.href = mailtoLink;
    console.log('Form submitted:', formData);
    setFormData(
      {...formData}, 
    )
  }

 

  return (
    <>    
    
    <div className="w-100 vh-100 bg-white" >
      <main>
      <div className="container mt-3">
        <nav className={`navbar navbar-expand-lg ${nav !== '0' ? "border-bottom" : ""}`} role="navigation">
          <div className="container-fluid navbarTabs d-flex">
            <a className="navbar-brand" href="#home">
              <img src="/logo3.png" width="150px" alt="logo" />
            </a>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="button" 
              data-bs-target="#navbarNavDropdown" 
              aria-controls="navbarNavDropdown" 
              aria-expanded= "false"
              aria-label="Toggle navigation"
              >
              <span className="navbar-toggler-icon" id="toggler"></span>
            </button>
            <div className="navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a id={'0'} className="nav-link" href="#home" onClick={handleClick}>Home</a>
                </li>
                <li className="nav-item">
                  <a id={'1'} className="nav-link" href="#about" onClick={handleClick}>About us</a>
                </li>
                <li className="nav-item"> 
                  <a id={'2'} className="nav-link" href="#services" onClick={handleClick}>Services</a>
                </li>
                <li className="nav-item nav-pills">
                  <a id={'3'} className="nav-link" href="#contact" style={{ backgroundColor: '#5C7285', color: 'white' }} onClick={handleClick}>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

        {/* <div className="container mt-3 ">
        
        <nav className={`navba-nav  navbar-expand-lg ${nav !== '0' ? "border-bottom":""}`} role="navigation" >
          <div className="container-fluid">          
            <div className="navbarTabs">
              <a className="navbar-brand" href="#home"><img src="/logo3.png" width="150px" alt="logo"/></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse " id="navbarNavDropdown">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
            </div>
          </div>
        </nav>
        </div>
         */}
        <div className="w-100 bg-white mb-5">

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
              <h2 className="display-4 mb-5">Explore our Projects </h2>
              <div className="row row-cols-1 row-cols-md-2 g-4 clearfix mb-5" style={{borderTop: '1px solid #818C78', paddingBottom: '50px'}}>
                <div className="col">
                  <div className="card border-white">
                    <img src="/pic2.png" className="card-img-top rounded" alt="garden" style={{borderRadius: '20px'}}/>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-white">
                    <img src="/pic3.png" className="card-img-top" alt="shrubs" style={{borderRadius: '20px'}}/>
                   
                  </div>
                </div>
                
                <div className="col">
                  <div className="card border-white">
                    <img src="/pic4.png" className="card-img-top" alt="lawn" style={{borderRadius: '20px'}}/>
                    
                  </div>
                </div>
                <div className="col">
                  <div className="card border-white">
                    <img src="/pic1.png" className="card-img-top" alt="graden" style={{borderRadius: '20px'}}/>
                    
                  </div>
                </div>
                <div className="col">
                  <div className="card border-white">
                    <img src="/pic5.png " className="card-img-top" alt="flower bed" width="600px" height="300" style={{borderRadius: '20px'}}/>
                  </div>
                  <div className="mb-5"></div>
                </div>
                <div className="col">
                  <div className="card border-white">
                    <img src="/pic6.png " className="card-img-top " width="600px" height="300" alt="sloped flower bed" style={{borderRadius: '20px'}}/>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-white">
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

            <Contact handleSubmitForm = {onSubmitForm} formData={formData} updateFormData={updateFormData}/>
          )}
        </div>
        <div className="mt-5">
          <Footer handleNavClick={handleClick}/>
        </div>
      </main>
    </div>
    </>

      
   
  );
}
