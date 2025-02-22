/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
 
'use client'
 
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


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

    const toggle = () => setIsOpen((prev) => !prev);

    // const toggle = ():void => {

    //   setIsOpen(!isOpen);

    //    const getNavBar = document.getElementById('navbarNavDropdown')?.children[0];

    //   if (getNavBar) {
    //     console.log("nav",getNavBar)
    //     getNavBar.classList.remove('hidden')
    //   } 

    //   if(!isOpen) {
    //     getNavBar?.classList.add('hidden')
    //   }

    
    // };
    // console.log(isOpen)
      
  return (
    <nav className={`navbar navbar-expand-lg ${ pathname !== '/'? "border-bottom" : ""}`} role="navigation">
          <div className="container-fluid navbarTabs d-flex">
            <a className="navbar-brand" href="#home">
              <img src="/logo3.png" width="150px" alt="logo" />
            </a>

             {/* Toggle Button */}
              <button
                className="navbar-toggler lg:hidden"
                type="button"
                aria-expanded={isOpen ? "true" : "false"}
                aria-label="Toggle navigation"
                onClick={toggle}
                style={{ border: 'none', background: 'transparent' }}
              >
                <span>{!isOpen ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}</span>
              </button>

              <div className={`w-full ${isOpen ? 'flex' : 'hidden'} lg:flex `}>
              <ul className="flex flex-col items-center justify-center text-center gap-y-4 gap-x-0 w-full lg:flex-row lg:items-end lg:justify-end lg:gap-x-8 lg:gap-y-0">
                  {categories.map((category) => (
                    <li key={category.id} className={category.className}>
                      <Link
                        href={category.href}
                        className={`nav-link ${category.id === '3' ? 'navbarButton' : ''}`}
                        style={{ textDecoration: 'none', padding: '8px' }}
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
          </div>
        </nav>
  );
}


