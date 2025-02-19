/* eslint-disable @next/next/no-img-element */
 
'use client'
 
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from 'next/navigation';


const categories = [
    {
      name: 'Home',
      href: '/',
      id: '0',
      className:"nav-item"
    },
    {
      name: 'About us',
      href: '/about',
      id: '1',
      className:"nav-item"
    },
    {
      name: 'Services',
      href: '/services',
      id: '2',
      className:"nav-item"
    },
    {
      name: 'Contact',
      href: '/contact',
      id: '3',
      className:"nav-item nav-pills"
    },
  ];;

export default function Navbar() {

    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
      
  return (
    <nav className={`navbar navbar-expand-lg ${ pathname !== '/'? "border-bottom" : ""}`} role="navigation">
          <div className="container-fluid navbarTabs d-flex">
            <a className="navbar-brand" href="#home">
              <img src="/logo3.png" width="150px" alt="logo" />
            </a>
            <button 
              className="navbar-toggler lg:hidden" 
              type="button" 
              data-bs-toggle="button" 
              data-bs-target="#navbarNavDropdown" 
              aria-controls="navbarNavDropdown" 
              aria-expanded= "false"
              aria-label="Toggle navigation"
              onClick = {toggle}
              >
              <span className="navbar-toggler-icon" id="toggler"></span>
            </button>
            <div className="navbar-collapse " id="navbarNavDropdown">
            <ul className='hidden lg:flex gap-x-8 gap-y-4 ms-auto  align-items-center '>
                {categories.map(category => {
                    return (
                    <li key={category.id} className={`${category.className} `}>
                        <Link href={category.href} className={`nav-link ${category.id === '3'  ? "navbarButton" : ""}`} style={{ textDecoration: 'none', padding: '8px'}}>
                        {category.name}
                        </Link>
                    </li>
                    );
                })}
                </ul>
            </div>
          </div>
        </nav>
  );
}


